interface Leaf {
    type: 'leaf';
    char: string;
    code: string;
}

interface Combine {
    type: 'combine';
    r: Leaf | Combine;
    l: Leaf | Combine;
    code: string;
}

export const buildTree = (commands: string[]) => {
    const stack = [];

    commands.forEach((command) => {
        if (command[0] === 'P') {
            const leaf: Leaf = { type: 'leaf', char: command[1], code: '' };
            stack.push(leaf);
        }
        if (command[0] === 'C') {
            const leafR: Leaf = stack.pop();
            const leafL: Leaf = stack.pop();
            const combine: Combine = {
                type: 'combine',
                r: { ...leafR, code: '1' },
                l: { ...leafL, code: '0' },
                code: ''
            };
            stack.push(combine);
        }
    });

    return stack[0];
};

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
