import { numberEncode } from './numberEncode';

describe('numberEncode', () => {
    test.each`
        src           | expected
        ${0}          | ${'0'}
        ${1}          | ${'1'}
        ${2}          | ${'2'}
        ${3}          | ${'3'}
        ${4}          | ${'4'}
        ${5}          | ${'1e'}
        ${6}          | ${'1d'}
        ${7}          | ${'1c'}
        ${8}          | ${'1b'}
        ${9}          | ${'1a'}
        ${10}         | ${'10'}
        ${14}         | ${'14'}
        ${15}         | ${'2e'}
        ${16}         | ${'2d'}
        ${17}         | ${'2c'}
        ${18}         | ${'2b'}
        ${19}         | ${'2a'}
        ${177}        | ${'2bc'}
        ${1234567890} | ${'124edcbaa0'}
        ${314159265}  | ${'3142da3ce'}
        ${0}          | ${'0'}
        ${2000000000} | ${'2000000000'}
    `('it returns $expected from $src', ({ src, expected }) => {
        expect(numberEncode(src)).toBe(expected);
    });
});
