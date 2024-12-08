const { getFiles } = require('../utils/getFiles');
const number = __filename.match(/day(\d+)/)[1];
const { part1 } = require(`../src/day${number}/index.js`);
const { examplePart1, inputPart1 } = getFiles(number);


describe.only('Day 6', () => {
    test('part 1 - example', () => {
        expect(part1(examplePart1)).toBe(41);
    });

    console.log('Value: ', part1(inputPart1));
});