const { getFiles } = require('../utils/getFiles');
const number = __filename.match(/day(\d+)/)[1];
const { part1, part2 } = require(`../src/day${number}/index.js`);
const { examplePart1, examplePart2, inputPart1, inputPart2 } = getFiles(number);


describe.only('Day 4', () => {
    test('part 1 - example', () => {
        expect(part1(examplePart1)).toBe(18);
    });


    console.log('Value: ', part1(inputPart1));


    test('part 2 - example', () => {
        expect(part2(examplePart2)).toBe(9);
    });

    console.log('Value: ', part2(inputPart2));
});