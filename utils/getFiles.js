const { readFile } = require('./readFile');

function getFiles(number) {
    const examplePart1 = readFile(`src/day${number}/example-part1.txt`);
    const examplePart2 = readFile(`src/day${number}/example-part2.txt`);
    const inputPart1 = readFile(`src/day${number}/input-part1.txt`);
    const inputPart2 = readFile(`src/day${number}/input-part2.txt`);

    return { examplePart1, examplePart2, inputPart1, inputPart2 };
}

module.exports = { getFiles };