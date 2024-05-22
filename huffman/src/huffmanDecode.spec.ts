import { buildTree } from './common';
import { getCharFromTree, huffmanDecode } from './huffmanDecode';

describe('getCharFromTree', () => {
    const tree = buildTree(['Pa', 'Pb', 'Pc', 'C', 'C']);
    test.each`
        src     | tree    | expected
        ${'0'}  | ${tree} | ${{ pos: 1, char: 'a' }}
        ${'10'} | ${tree} | ${{ pos: 2, char: 'b' }}
        ${'11'} | ${tree} | ${{ pos: 2, char: 'c' }}
    `('it returns $expected from $src', ({ src, tree, expected }) => {
        expect(getCharFromTree(tree, src, 0)).toEqual(expected);
    });
});

describe('huffmanDecode', () => {
    const tree = buildTree(['Pa', 'Pb', 'Pc', 'C', 'C']);

    test.each`
        src               | tree    | expected
        ${'010'}          | ${tree} | ${'ab'}
        ${'01011'}        | ${tree} | ${'abc'}
        ${'010010110110'} | ${tree} | ${'ababcaca'}
    `('it returns $expected from $src', ({ src, tree, expected }) => {
        expect(huffmanDecode(tree, src)).toEqual(expected);
    });
});
