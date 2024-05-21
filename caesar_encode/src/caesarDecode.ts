import { capitals, smalls } from './alphabet';

export const decodeChar = (char: string, N: number): string => {
    let alphabet = capitals;
    let index = alphabet.indexOf(char);
    if (index < 0) {
        alphabet = smalls;
        index = alphabet.indexOf(char);
    }

    let encodedIndex = index - N;
    if (encodedIndex < 0) {
        encodedIndex += alphabet.length;
    }
    return alphabet[encodedIndex];
};

export const caesarDecode = (sourceString: string, N: number): string => {
    const srcStr = sourceString.split('');
    const result = srcStr.map((char) => decodeChar(char, N)).join('');
    return result;
};
