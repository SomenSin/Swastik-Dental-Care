export function getPath(path: string): string {
  const basePath = "";
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
}
