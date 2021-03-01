module.exports = function toReadable(number) {
    let strNumber = String(number);
    let unit;
    let decimal;
    let decimalFull;
    let century;
    let readable = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
        "100": "one hundred"
    }

    if (readable[strNumber] !== undefined) {
        return readable[strNumber];
    }

    if (strNumber.length == 1) {
        unit = strNumber;
        return readable[unit];
    } else if (strNumber.length == 2) {
        unit = strNumber[1];
        decimal = strNumber[0];
        return `${readable[decimal * 10]} ${readable[unit]}`;
    } else if (strNumber.length == 3) {
        unit = strNumber[2];
        decimal = strNumber[1];
        decimalFull = decimal + unit;
        century = strNumber[0];

        if (decimal == 0 && unit == 0) {
            return `${readable[century]} hundred`;
        } else if (decimal == 0 && unit !== 0) {
            return `${readable[century]} hundred ${readable[unit]}`;
        } else if (decimal !== 0 && unit == 0) {
            return `${readable[century]} hundred ${readable[decimal * 10]}`;
        } else if (readable[decimalFull] !== undefined) {
            return `${readable[century]} hundred ${readable[decimalFull]}`;
        } else {
            return `${readable[century]} hundred ${readable[decimal * 10]} ${readable[unit]}`;
        }
    }
}
