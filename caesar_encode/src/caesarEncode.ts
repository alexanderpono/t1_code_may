const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alphabetS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const encodeChar = (char: string, N: number): string => {
    const index = alphabetS.indexOf(char);
    let encodedIndex = index + N;
    if (encodedIndex > alphabetS.length) {
        encodedIndex -= alphabetS.length;
    }
    return alphabet[encodedIndex];
};

export const caesarEncode = (sourceString: string, N: number): string => {
    const srcStr = sourceString.split('');
    const result = srcStr.map((char) => encodeChar(char, N)).join('');
    return result;
};
