import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge tailwind classes together without conflicts.
 *
 * @param { ClassValue[] } classes - The classes to merge together.
 * @returns { string } - The merged classes.
 */
export const cn = (...classes: ClassValue[]): string => {
  return twMerge(clsx(...classes));
};
