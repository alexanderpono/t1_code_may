import { buildTree } from './common';
import { huffmanEncode } from './huffmanEncode';

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
