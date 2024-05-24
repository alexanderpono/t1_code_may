const buildTree = (commands) => {
    const stack = [];

    commands.forEach((command) => {
        if (command[0] === 'P') {
            const leaf = { type: 'leaf', char: command[1], code: '' };
            stack.push(leaf);
        }
        if (command[0] === 'C') {
            const leafR = stack.pop();
            const leafL = stack.pop();
            const combine = {
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

const encodeChar = (node, char, path) => {
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

const huffmanEncode = (tree, src) => {
    const result = src.split('').map((char) => encodeChar(tree, char, ''));

    return result.join('');
};

const getTreeConfig = (input) => {
    const lines = input.split(/\n/);
    const count = parseInt(lines[0]);
    const result = [];
    for (let i = 1; i <= count; i++) {
        result.push(lines[i]);
    }
    return result;
};

const getStringToProcess = (input) => {
    const lines = input.split(/\n/);
    const count = parseInt(lines[0]);
    return lines[count + 1];
};

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = '';
process.stdin.on('data', function (input) {
    stdin_input += input; // get the input
});
process.stdin.on('end', function () {
    main(stdin_input);
});
function main(input) {
    const src = input;
    const treeConfig = getTreeConfig(src);
    const tree = buildTree(treeConfig);
    const stringToProcess = getStringToProcess(src);
    process.stdout.write(huffmanEncode(tree, stringToProcess));
}
