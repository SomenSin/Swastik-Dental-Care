export function getPath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? "/Swastik-Dental-Care" : "";
  
  // Ensure the path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}
