import readline from 'node:readline';
import { caesarEncode } from './caesarEncode';
import { caesarDecode } from './caesarDecode';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`N? `, (nS) => {
    rl.question(`text? `, (text) => {
        console.log(`N = ${nS}`);
        console.log(`text = ${text}`);

        const encoded = caesarEncode(text, parseInt(nS));
        console.log(`encoded = ${encoded}`);

        const decoded = caesarDecode(encoded, parseInt(nS));
        console.log(`decoded = ${decoded}`);

        rl.close();
    });
});
