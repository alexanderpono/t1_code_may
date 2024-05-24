import { buildTree } from './common';
import { huffmanEncode } from './huffmanEncode';
import { cases } from './huffmanEncode.spec-cases';

describe('huffmanEncode', () => {
    const tree = buildTree(['Pa', 'Pb', 'Pc', 'C', 'C']);

    test.each`
        src           | tree    | expected
        ${'a'}        | ${tree} | ${'0'}
        ${'b'}        | ${tree} | ${'10'}
        ${'c'}        | ${tree} | ${'11'}
        ${'ab'}       | ${tree} | ${'010'}
        ${'ababcaca'} | ${tree} | ${'010010110110'}
    `('it returns $expected from $src', ({ src, tree, expected }) => {
        expect(huffmanEncode(tree, src)).toBe(expected);
    });
});

const getTreeConfig = (input: string): string[] => {
    const lines = input.split('\n');
    console.log('lines=', lines);
    const count = parseInt(lines[0]);
    const result: string[] = [];
    for (let i = 1; i <= count; i++) {
        result.push(lines[i]);
    }
    return result;
};

const getStringToProcess = (input: string): string => {
    const lines = input.split('\n');
    const count = parseInt(lines[0]);
    return lines[count + 1];
};

describe('huffmanEncode2', () => {
    test.each`
        src                  | name       | expected
        ${cases.case1.input} | ${'case1'} | ${cases.case1.expected}
        ${cases.case2.input} | ${'case2'} | ${cases.case2.expected}
        ${cases.case3.input} | ${'case3'} | ${cases.case3.expected}
        ${cases.case4.input} | ${'case4'} | ${cases.case4.expected}
    `('it returns $expected from $name', ({ src, expected }) => {
        const treeConfig = getTreeConfig(src);
        const tree = buildTree(treeConfig);
        const stringToProcess = getStringToProcess(src);
        expect(huffmanEncode(tree, stringToProcess)).toBe(expected);
    });
});
