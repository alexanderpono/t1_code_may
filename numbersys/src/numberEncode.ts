interface DigitEncodeResult {
    encoded: string;
    memory: number;
}
export const defaultDigitEncodeResult: DigitEncodeResult = {
    encoded: '',
    memory: 0
};
export const encodeDigit = (indexFrom0To9: number): DigitEncodeResult => {
    const indexToEncoded = {
        0: {
            encoded: '0',
            memory: 0
        },
        1: {
            encoded: '1',
            memory: 0
        },
        2: {
            encoded: '2',
            memory: 0
        },
        3: {
            encoded: '3',
            memory: 0
        },
        4: {
            encoded: '4',
            memory: 0
        },
        5: {
            encoded: 'e',
            memory: 1
        },
        6: {
            encoded: 'd',
            memory: 1
        },
        7: {
            encoded: 'c',
            memory: 1
        },
        8: {
            encoded: 'b',
            memory: 1
        },
        9: {
            encoded: 'a',
            memory: 1
        }
    };

    return indexToEncoded[indexFrom0To9];
};

export const numberEncode = (num: number): string => {
    let curNum = num;
    let MAX_LOOP_NUMBER = 10;
    let counter = 0;
    let resultAr = [];
    let previousEncodeResult: DigitEncodeResult = defaultDigitEncodeResult;

    while (curNum > 0 && counter < MAX_LOOP_NUMBER) {
        const nextNum = Math.floor(curNum / 10);
        const curDecimalDigit = curNum - nextNum * 10;
        let encodeResult = null;
        if (previousEncodeResult.memory === 0) {
            encodeResult = encodeDigit(curDecimalDigit);
        } else {
            encodeResult = encodeDigit(curDecimalDigit + previousEncodeResult.memory);
        }
        resultAr.unshift(encodeResult.encoded);

        curNum = nextNum;
        previousEncodeResult = encodeResult;
        counter++;
    }
    if (previousEncodeResult.memory !== 0) {
        resultAr.unshift(previousEncodeResult.memory);
    }
    if (num === 0) {
        resultAr.unshift('0');
    }

    const result = resultAr.join('');

    return result;
};
