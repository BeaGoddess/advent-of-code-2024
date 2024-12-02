const { part1, part2 } = require('../src/day01/day01.js');
const number = __filename.match(/day(\d+)/)[1];
const example = readFile(`src/day${number}/example.txt`);
const input = readFile(`src/day${number}/input.txt`);

describe.only('Example Part 1', () => {
    test('part 1 - example', () => {
        expect(part1(example)).toBe(11);
    });

    test('part 1 - challenge', () => {
        console.log('Value: ', part1(input));
    });

    test('part 2 - example', () => {
        expect(part2(example)).toBe(31);
    });

    test('part 2 - challenge', () => {
        console.log('Value: ', part2(input));
    });
});