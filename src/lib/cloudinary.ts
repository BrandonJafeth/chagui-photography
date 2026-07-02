/**
 * Inserta una transformación de Cloudinary (resize + auto format/quality) en una
 * URL de /upload/. Si la URL no es de Cloudinary, se devuelve sin cambios.
 */
export function cldOptimize(url: string, width: number, height: number): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url
  const transform = `w_${width},h_${height},c_fill,g_auto,q_auto,f_auto`
  return url.replace('/upload/', `/upload/${transform}/`)
}
