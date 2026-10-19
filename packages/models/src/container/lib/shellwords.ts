import { split as shellwordsSplit } from "shellwords";

export const shellSplit = (words: string): string[] => {
  return shellwordsSplit(words.trim());
};

export const shellJoin = (words: string[]): string => {
  return words
    .map((word) => {
      return /\s/.test(word) ? `"${word}"` : word;
    })
    .join(" ")
    .trim();
};
