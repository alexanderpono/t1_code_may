const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const smalls = 'abcdefghijklmnopqrstuvwxyz'.split('');

const encodeChar = (char, N) => {
    let alphabet = capitals;
    let index = alphabet.indexOf(char);
    if (index < 0) {
        alphabet = smalls;
        index = alphabet.indexOf(char);
        if (index < 0) {
            return char;
        }
    }
    let encodedIndex = index + N;
    while (encodedIndex >= alphabet.length) {
        encodedIndex -= alphabet.length;
    }
    return alphabet[encodedIndex];
};

const caesarEncode = (sourceString, N) => {
    const srcStr = sourceString.split('');
    const result = srcStr.map((char) => encodeChar(char, N)).join('');
    return result;
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
    const [Nstring, sourceString] = input.split(/\n/);
    process.stdout.write(caesarEncode(sourceString, parseInt(Nstring)));
    // process.stdout.write(caesar.apply(null, input.split(/\n/)));
}
