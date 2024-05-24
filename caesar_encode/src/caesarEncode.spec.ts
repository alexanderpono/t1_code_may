import { caesarEncode, encodeChar } from './caesarEncode';

describe('caesarEncode', () => {
    test.each`
        char                            | N      | expected
        ${'WISDOM'}                     | ${5}   | ${'BNXITR'}
        ${'WisdoM'}                     | ${5}   | ${'BnxitR'}
        ${'May the Force be with you.'} | ${0}   | ${'May the Force be with you.'}
        ${'said'}                       | ${18}  | ${'ksav'}
        ${'Carpe'}                      | ${100} | ${'Ywnla'}
    `('it returns $expected from ($char, $N)', async ({ char, N, expected }) => {
        expect(caesarEncode(char, N)).toBe(expected);
    });
});

describe('encodeChar', () => {
    test.each`
        char   | N    | expected
        ${'W'} | ${5} | ${'B'}
        ${'I'} | ${5} | ${'N'}
        ${'S'} | ${5} | ${'X'}
        ${'D'} | ${5} | ${'I'}
        ${'O'} | ${5} | ${'T'}
        ${'M'} | ${5} | ${'R'}
    `('it returns $expected from ($char, $N)', async ({ char, N, expected }) => {
        expect(encodeChar(char, N)).toBe(expected);
    });
});
