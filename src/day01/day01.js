function part1(lines) {
    const newLines = lines.map(line => line.split('   ').map(Number));
    const firstColumn = newLines.map(line => line[0]).sort((a, b) => a - b);
    const secondColumn = newLines.map(line => line[1]).sort((a, b) => a - b);

    let total = 0;

    for (let i = 0; i < newLines.length; i++) {
        total += Math.abs(firstColumn[i], secondColumn[i]);
    }

    return total;
}

function part2(lines) {
    const newLines = lines.map(line => line.split('   ').map(Number));
    const firstColumn = newLines.map(line => line[0]);
    const secondColumn = newLines.map(line => line[1]);

    let total = 0;

    for (const number of firstColumn) {
        let count = 0;

        if (secondColumn.includes(number)) {
            count = secondColumn.reduce((acc, curr) => curr === number ? acc + 1 : acc, 0)
        }

        total += count * number
    }


    return total;
}

module.exports = { part1, part2 };
