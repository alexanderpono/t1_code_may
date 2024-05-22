import { Combine } from './common';

export const encodeChar = (node: Combine, char: string, path: string) => {
    if (node.l.type === 'leaf' && node.l.char === char) {
        return path + node.code + node.l.code;
    }
    if (node.r.type === 'leaf' && node.r.char === char) {
        return path + node.code + node.r.code;
    }
    if (node.l.type === 'combine') {
        const fromL = encodeChar(node.l, char, path + node.code);
        if (fromL !== '') {
            return fromL;
        }
    }
    if (node.r.type === 'combine') {
        const fromR = encodeChar(node.r, char, path + node.code);
        if (fromR !== '') {
            return fromR;
        }
    }
    return '';
};

export const huffmanEncode = (tree: Combine, src: string): string => {
    const result = src.split('').map((char) => encodeChar(tree, char, ''));

    return result.join('');
};
