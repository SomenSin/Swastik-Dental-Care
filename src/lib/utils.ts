export function getPath(path: string): string {
  const basePath = "/Swastik-Dental-Care";
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
}
