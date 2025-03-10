/**
 * Composable to generate a unique ID for an element with a given prefix.
 *
 * @param { string } prefix - The prefix for the ID.
 * @returns { string } Returns a unique ID.
 */
export const useId = (prefix: string): string => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${prefix}-${randomString}`;
};
