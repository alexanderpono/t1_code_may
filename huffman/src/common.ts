export interface Leaf {
    type: 'leaf';
    char: string;
    code: string;
}

export interface Combine {
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
