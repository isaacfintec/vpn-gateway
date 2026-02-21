export function normalizePort(p: string) {
  const DEFAULT_PORT = 8080
  const numberPort = parseInt(p, 10)
  if (isNaN(numberPort)) return DEFAULT_PORT
  return numberPort
}
