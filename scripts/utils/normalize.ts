
/**
 * Convert a string to PascalCase
*/
export const toPascalCase = (s: string) => {
  return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}