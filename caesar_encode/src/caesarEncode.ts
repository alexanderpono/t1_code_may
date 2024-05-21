import { capitals, smalls } from './alphabet';

export const encodeChar = (char: string, N: number): string => {
    let alphabet = capitals;
    let index = alphabet.indexOf(char);
    if (index < 0) {
        alphabet = smalls;
        index = alphabet.indexOf(char);
    }
    let encodedIndex = index + N;
    if (encodedIndex > alphabet.length) {
        encodedIndex -= alphabet.length;
    }
    return alphabet[encodedIndex];
};

export const caesarEncode = (sourceString: string, N: number): string => {
    const srcStr = sourceString.split('');
    const result = srcStr.map((char) => encodeChar(char, N)).join('');
    return result;
};
