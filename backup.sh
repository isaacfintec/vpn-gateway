# Configuration
APP_NAME="gateway" # Reemplaza con el nombre de tu aplicación
NEW_TARBALL="$APP_NAME-$NEW_ENV.tgz"
OLD_TARBALL="$APP_NAME-$OLD_ENV.tgz"
SERVER_IP="ec2-3-142-174-65.us-east-2.compute.amazonaws.com" # Reemplaza con la IP de tu servidor AWS
SERVER_USER="ec2-user" # Reemplaza con el usuario de tu servidor AWS
SERVER_PATH="~" # Reemplaza con la ruta en tu servidor AWS
SSH_KEY="pruebaec2.pem" # Reemplaza con la ruta a tu clave privada
BACKUP_NAME="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
REMOTE_BACKUP_PATH="/tmp/$BACKUP_NAME"
LOCAL_BACKUP_DIR="./backups"

# Ensure local backup directory exists
mkdir -p $LOCAL_BACKUP_DIR

echo "Creating remote backup (excluding node_modules)..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_IP << EOF
  # Create a compressed archive of the current code
  # We use /tmp to avoid permission issues and ensure auto-cleanup if script fails
  tar -czf $REMOTE_BACKUP_PATH -C $SERVER_PATH --exclude='node_modules' .
  echo "Archive created at $REMOTE_BACKUP_PATH"
EOF

echo "Downloading backup to local machine..."
scp -i $SSH_KEY $SERVER_USER@$SERVER_IP:$REMOTE_BACKUP_PATH $LOCAL_BACKUP_DIR/

echo "Cleaning up remote temporary file..."
ssh -i $SSH_KEY $SERVER_USER@$SERVER_IP "rm $REMOTE_BACKUP_PATH"

echo "Backup completed: $LOCAL_BACKUP_DIR/$BACKUP_NAME"