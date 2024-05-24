const defaultDigitEncodeResult = {
    decoded: 0
};
const decodeDigit = (char) => {
    const decode = {
        0: {
            decoded: 0
        },
        1: {
            decoded: 1
        },
        2: {
            decoded: 2
        },
        3: {
            decoded: 3
        },
        4: {
            decoded: 4
        },
        e: {
            decoded: -5
        },
        d: {
            decoded: -4
        },
        c: {
            decoded: -3
        },
        b: {
            decoded: -2
        },
        a: {
            decoded: -1
        }
    };
    // console.log('char=',char);

    return decode[char].decoded;
};

const numberDecode = (num) => {
    const destDigits = num.split('');
    const resultAr = destDigits.map(decodeDigit);

    let result = 0;
    let weight = 1;
    for (let i = resultAr.length - 1; i >= 0; i--) {
        result += resultAr[i] * weight;
        weight *= 10;
    }
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
    process.stdout.write('' + numberDecode(input.trim()));
}
