import semverCompare from "semver-compare";

export const isNewerVersion = <T extends { number: string }>(
  currentVersion: string,
  version: T,
): boolean => semverCompare(version.number, currentVersion) > 0;
