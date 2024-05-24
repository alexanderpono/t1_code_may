interface DigitDecodeResult {
    decoded: number;
}
export const defaultDigitEncodeResult: DigitDecodeResult = {
    decoded: 0
};
export const decodeDigit = (char: string): number => {
    const decode = {
        0: {
            decoded: 0
        },
        1: {
            decoded: 1
        },
        2: {
            decoded: 2
        },
        3: {
            decoded: 3
        },
        4: {
            decoded: 4
        },
        e: {
            decoded: -5
        },
        d: {
            decoded: -4
        },
        c: {
            decoded: -3
        },
        b: {
            decoded: -2
        },
        a: {
            decoded: -1
        }
    };

    return decode[char].decoded;
};

export const numberDecode = (num: string): number => {
    const destDigits = num.split('');
    const resultAr = destDigits.map(decodeDigit);

    let result = 0;
    let weight = 1;
    for (let i = resultAr.length - 1; i >= 0; i--) {
        result += resultAr[i] * weight;
        weight *= 10;
    }
    return result;
};
