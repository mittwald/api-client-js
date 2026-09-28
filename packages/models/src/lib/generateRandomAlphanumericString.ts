const alphanumericCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomAlphanumericString = (length: number) => {
  let result = "";
  const charactersLength = alphanumericCharacters.length;
  for (let i = 0; i < length; i++) {
    result += alphanumericCharacters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }
  return result;
};
