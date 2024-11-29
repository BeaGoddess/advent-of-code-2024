const { calculateFuel } = require('../src/day01/day01.js');
const { getFiles } = require('../utils/getFiles');
const number = __filename.match(/day(\d+)/)[1];
const { examplePart1, examplePart2, inputPart1, inputPart2 } = getFiles(number);



describe.only('Example Part 1', () => {
    test('part 1 - example', () => {
        expect(calculateFuel(examplePart1)).toBe(2);
    });

    test('part 1 - input', () => {
        expect(calculateFuel(inputPart1)).toBe(3);
    });

    test('part 2 - example', () => {
        expect(calculateFuel(examplePart2)).toBe(4);
    });

    test('part 2 - input', () => {
        expect(calculateFuel(inputPart2)).toBe(5);
    });
});