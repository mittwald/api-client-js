import { format } from "./format.js";

const header = `\
/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
`;

export const prepareTypeScriptOutput = (content: string): string => {
  const formatted = format(content);
  return header + formatted;
};
