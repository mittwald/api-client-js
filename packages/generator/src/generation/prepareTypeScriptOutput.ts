import { format } from "./format.js";

const header = `\
/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
`;

export const prepareTypeScriptOutput = async (
  content: string,
): Promise<string> => {
  const formatted = await format(content);
  return header + formatted;
};
