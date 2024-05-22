import { Combine, Leaf } from './common';

interface Result {
    pos: number;
    char: string;
}

export const getCharFromTree = (tree: Combine | Leaf, src: string, pos: number): Result => {
    let node = tree;
    let found = false;
    let counter = 0;
    let curPos = pos;
    const MAX_COUNTER = 15;
    while (!found && counter < MAX_COUNTER) {
        const curNumber = src[curPos];
        if (node.type === 'combine' && curNumber === '0') {
            node = node.l;
            curPos++;
            continue;
        }
        if (node.type === 'combine' && curNumber === '1') {
            node = node.r;
            curPos++;
            continue;
        }
        if (node.type === 'leaf') {
            return {
                pos: curPos,
                char: node.char
            };
        }
        counter++;
    }
    return {
        pos: 0,
        char: ''
    };
};

export const huffmanDecode = (tree: Combine, src: string): string => {
    let result = '';

    let finish = false;
    let counter = 0;
    let curPos = 0;
    const MAX_COUNTER = 15;
    while (!finish && counter < MAX_COUNTER) {
        const curResult = getCharFromTree(tree, src, curPos);
        curPos = curResult.pos;
        result += curResult.char;
        finish = curPos >= src.length;

        counter++;
    }

    return result;
};
