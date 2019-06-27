const alphabet: String = "abcdefghijklmnopqrstuvwxyz";
const numbers: String = "0123456789";
const specials: String = "/\\-_!@#$%^&*()'\"[]{};:,<.>?+";

String.prototype.replaceAt = function(
  index: number,
  replacement: String
): String {
  if (index < 0) return this;
  return (
    this.substr(0, index) + replacement + this.substr(index + 1, this.length)
  );
};

export const increment = (str: String, index: number = 1): String => {
  str = str.toLowerCase();
  if (str === "z".repeat(str.length)) {
    str = `0${str}`;
  }
  let char = str[str.length - index];
  for (let s = 0; s < alphabet.length; s++) {
    for (let n = 0; n < numbers.length; n++) {
      for (let spec = 0; spec < specials.length; spec++) {
        const alpha: String = alphabet[s];
        const num: String = numbers[n];
        const special: String = specials[spec];
        switch (char) {
          case alpha:
            return str.replaceAt(str.length - index, alphabet[s + 1]);
          case num:
            return str.replaceAt(str.length - index, numbers[n + 1]);
          case special:
            return increment(str, index + 1);
          case "z":
            return increment(str.replaceAt(str.length - index, "0"), index + 1);
          case "9":
            return str.replaceAt(str.length - index, "a");
        }
      }
    }
  }
};
