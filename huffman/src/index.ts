import { buildTree } from './common';

console.log('huffman');

const stack = buildTree(['Pa', 'Pb', 'Pc', 'C', 'C']);
console.log('huffman stack=', JSON.stringify(stack));
