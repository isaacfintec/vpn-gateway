#!/bin/bash
# Leer la configuración
source deploy.conf

# Determinar el entorno opuesto
if [ "$CURRENT_ENV" == "blue" ]; then
  NEW_ENV="green"
  OLD_ENV="blue"
  NEW_PORT=8081
  OLD_PORT=8080
else
  NEW_ENV="blue"
  OLD_ENV="green"
  NEW_PORT=8080
  OLD_PORT=8081
fi

# Variables
APP_NAME="gateway" # Reemplaza con el nombre de tu aplicación
NEW_TARBALL="$APP_NAME-$NEW_ENV.tgz"
OLD_TARBALL="$APP_NAME-$OLD_ENV.tgz"
SERVER_IP="ec2-3-142-174-65.us-east-2.compute.amazonaws.com" # Reemplaza con la IP de tu servidor AWS
SERVER_USER="ec2-user" # Reemplaza con el usuario de tu servidor AWS
SERVER_PATH="~" # Reemplaza con la ruta en tu servidor AWS
SSH_KEY="pruebaec2.pem" # Reemplaza con la ruta a tu clave privada
# ssh -i "pruebaec2.pem" ec2-user@ec2-3-142-174-65.us-east-2.compute.amazonaws.com 

if [ -f "$OLD_TARBALL" ]; then
  rm "$OLD_TARBALL"
  echo "Tarball anterior eliminado: $OLD_TARBALL"
else
  echo "No se encontró tarball anterior."
fi

# Actualizar deploy.conf
echo "Actualizando deploy.conf..."
if sed -i '' "s/CURRENT_ENV=$CURRENT_ENV/CURRENT_ENV=$NEW_ENV/" deploy.conf; then
  echo "CURRENT_ENV actualizado a: $NEW_ENV"
else
  echo "Error al actualizar deploy.conf."
  exit 1
fi

# Empaquetar la aplicación
echo "Empaquetando la aplicación..."
npm pack

# Obtener el nombre del tarball generado automáticamente
PACK_TARBALL=$(ls *.tgz)

# Renombrar el tarballz
echo "Renombrando el tarball..."
mv "$PACK_TARBALL" "$NEW_TARBALL"

# Subir el tarball al servidor
echo "Subiendo el tarball al servidor..."
scp -i $SSH_KEY $NEW_TARBALL $SERVER_USER@$SERVER_IP:$SERVER_PATH

echo "Subiendo archivo .env al servidor..."
scp -i $SSH_KEY .env $SERVER_USER@$SERVER_IP:$SERVER_PATH

# Conectarse al servidor y descomprimir el tarball
echo "Descomprimiendo el tarball en el servidor..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_IP << EOF
  rm -rf package
  echo "Package eliminado."
  tar -xzf $NEW_TARBALL
  echo "Tarbal descomprimido."
  rm $NEW_TARBALL
  cd package
  npm install
  echo "Paquetes instalados."
  sudo systemctl daemon-reload
  sudo systemctl restart gateway
  echo "System ctl reiniciado."
EOF

# Limpiar el tarball local
echo "Limpiando archivos locales..."
rm $NEW_TARBALL

echo "Despliegue completado."