

let XMAS = 'XMAS'.length

const check = (type, x, y, letterX, letterY, lines, str) => {
    if (str.length === XMAS) {
        if (str === 'XMAS') {
            return 1;
        }
        return 0;
    } else {
        const bottom = lines.length - letterY >= XMAS;
        const left = letterX + 1 - XMAS >= 0;
        const top = letterY + 1 - XMAS >= 0;
        const right = lines[letterY].split('').length - letterX >= XMAS;

        switch (type) {
            case 'horizontal-right':
                if (right) {
                    str += lines[y].split('')[x];
                    return check(type, x + 1, y, letterX, letterY, lines, str);
                }
                return 0;
            case 'horizontal-left':
                if (left) {
                    str += lines[y].split('')[x];
                    return check(type, x - 1, y, letterX, letterY, lines, str);
                }
                return 0;
            case 'vertical-right':
                if (bottom) {
                    str += lines[y].split('')[x];
                    return check(type, x, y + 1, letterX, letterY, lines, str);
                }
                return 0;
            case 'vertical-left':
                if (top) {
                    str += lines[y].split('')[x];
                    return check(type, x, y - 1, letterX, letterY, lines, str);
                }
                return 0;

            case 'diagonal-bottom-right':
                if (bottom && right) {
                    str += lines[y].split('')[x];
                    return check(type, x + 1, y + 1, letterX, letterY, lines, str);
                }
                return 0;
            case 'diagonal-bottom-left':
                if (bottom && left) {
                    str += lines[y].split('')[x];
                    return check(type, x - 1, y + 1, letterX, letterY, lines, str);
                }
                return 0;
            case 'diagonal-top-right':

                if (top && right) {
                    str += lines[y].split('')[x];
                    return check(type, x + 1, y - 1, letterX, letterY, lines, str);
                }
                return 0;
            case 'diagonal-top-left':

                if (top && left) {
                    str += lines[y].split('')[x];
                    return check(type, x - 1, y - 1, letterX, letterY, lines, str);
                }
                return 0;
        }
    }
}

function part1(lines) {
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split('');

        for (let j = 0; j < line.length; j++) {
            const letter = line[j]

            if (letter === 'X') {
                count += check('horizontal-right', j, i, j, i, lines, '')
                count += check('horizontal-left', j, i, j, i, lines, '')
                count += check('vertical-right', j, i, j, i, lines, '')
                count += check('vertical-left', j, i, j, i, lines, '')
                count += check('diagonal-top-right', j, i, j, i, lines, '')
                count += check('diagonal-top-left', j, i, j, i, lines, '')
                count += check('diagonal-bottom-right', j, i, j, i, lines, '')
                count += check('diagonal-bottom-left', j, i, j, i, lines, '')
            }
        }
    }

    return count;
}

const check2 = (type, x, y, lines) => {
    const bottom = lines.length - y >= 2;
    const left = x - 1 >= 0;
    const top = y - 1 >= 0;
    const right = lines[y].split('').length - x >= 2;



    if (top && right && bottom && left) {
        switch (type) {
            case 'right':
                if ((lines[y + 1].split('')[x + 1] === 'S' && lines[y - 1].split('')[x - 1] === 'M') || (lines[y + 1].split('')[x + 1] === 'M' && lines[y - 1].split('')[x - 1] === 'S')) {
                    return 1;
                }

                return 0;
            case 'left':
                if ((lines[y + 1].split('')[x - 1] === 'S' && lines[y - 1].split('')[x + 1] === 'M') || (lines[y + 1].split('')[x - 1] === 'M' && lines[y - 1].split('')[x + 1] === 'S')) {
                    return 1;
                }

                return 0;
        }
    } else {
        return 0;
    }

}

function part2(lines) {
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].split('');

        for (let j = 0; j < line.length; j++) {
            const letter = line[j]
            let X = 0;

            if (letter === 'A') {
                X += check2('right', j, i, lines, '')
                X += check2('left', j, i, lines, '')

                if (X === 2) {
                    count++;
                }
            }
        }
    }

    return count;
}

module.exports = { part1, part2 };
