const { readFile } = require('../utils/readFile');
const number = __filename.match(/day(\d+)/)[1];
const { part1, part2 } = require(`../src/day${number}/index.js`);
const example = readFile(`src/day${number}/example.txt`);
const input = readFile(`src/day${number}/input.txt`);

describe.only('Day 2', () => {
    test('part 1 - example', () => {
        expect(part1(example)).toBe(2);
    });

    console.log('Value: ', part1(input));

    test('part 2 - example', () => {
        expect(part2(example)).toBe(4);
    });

    console.log('Value: ', part2(input));
});