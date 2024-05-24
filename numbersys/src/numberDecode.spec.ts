import { numberDecode } from './numberDecode';

describe('numberDecode', () => {
    test.each`
        src             | expected
        ${'0'}          | ${0}
        ${'1'}          | ${1}
        ${'2'}          | ${2}
        ${'3'}          | ${3}
        ${'4'}          | ${4}
        ${'1e'}         | ${5}
        ${'1d'}         | ${6}
        ${'1c'}         | ${7}
        ${'1b'}         | ${8}
        ${'1a'}         | ${9}
        ${'10'}         | ${10}
        ${'14'}         | ${14}
        ${'2e'}         | ${15}
        ${'2d'}         | ${16}
        ${'2c'}         | ${17}
        ${'2b'}         | ${18}
        ${'2a'}         | ${19}
        ${'2bc'}        | ${177}
        ${'124edcbaa0'} | ${1234567890}
        ${'3142da3ce'}  | ${314159265}
        ${'2000000000'} | ${2000000000}
    `('it returns $expected from $src', ({ src, expected }) => {
        expect(numberDecode(src)).toBe(expected);
    });
});
