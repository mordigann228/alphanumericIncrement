"use strict";
exports.__esModule = true;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "/\\-_!@#$%^&*()'\"[]{};:,<.>?+";
String.prototype.replaceAt = function (index, replacement) {
    if (index < 0)
        return this;
    return (this.substr(0, index) + replacement + this.substr(index + 1, this.length));
};
exports.increment = function (str, index) {
    if (index === void 0) { index = 1; }
    str = str.toLowerCase();
    if (str === "z".repeat(str.length)) {
        str = "0" + str;
    }
    var char = str[str.length - index];
    for (var s = 0; s < alphabet.length; s++) {
        for (var n = 0; n < numbers.length; n++) {
            for (var spec = 0; spec < specials.length; spec++) {
                var alpha = alphabet[s];
                var num = numbers[n];
                var special = specials[spec];
                switch (char) {
                    case alpha:
                        return str.replaceAt(str.length - index, alphabet[s + 1]);
                    case num:
                        return str.replaceAt(str.length - index, numbers[n + 1]);
                    case special:
                        return exports.increment(str, index + 1);
                    case "z":
                        return exports.increment(str.replaceAt(str.length - index, "0"), index + 1);
                    case "9":
                        return str.replaceAt(str.length - index, "a");
                }
            }
        }
    }
};
