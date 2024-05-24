import { caesarDecode, decodeChar } from './caesarDecode';

describe('caesarDecode', () => {
    test.each`
        char                            | N      | expected
        ${'BNXITR'}                     | ${5}   | ${'WISDOM'}
        ${'BnXiTr'}                     | ${5}   | ${'WiSdOm'}
        ${'May the Force be with you.'} | ${0}   | ${'May the Force be with you.'}
        ${'ksav'}                       | ${18}  | ${'said'}
        ${'Ywnla'}                      | ${100} | ${'Carpe'}
    `('it returns $expected from ($char, $N)', async ({ char, N, expected }) => {
        expect(caesarDecode(char, N)).toBe(expected);
    });
});

describe('decodeChar', () => {
    test.each`
        char   | N    | expected
        ${'B'} | ${5} | ${'W'}
        ${'N'} | ${5} | ${'I'}
        ${'X'} | ${5} | ${'S'}
        ${'I'} | ${5} | ${'D'}
        ${'T'} | ${5} | ${'O'}
        ${'R'} | ${5} | ${'M'}
    `('it returns $expected from ($char, $N)', async ({ char, N, expected }) => {
        expect(decodeChar(char, N)).toBe(expected);
    });
});
