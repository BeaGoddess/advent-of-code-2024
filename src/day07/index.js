


function check(numbers, value, total, part) {
    for (let i = 0; i < numbers.length; i++) {
        if (i === numbers.length - 1) {
            return value === total;
        }

        const sum = value + numbers[i + 1];
        const product = value * numbers[i + 1];
        const add = Number(value.toString() + numbers[i + 1].toString());

        const checkAdd = part === 1 ? false : check(numbers.slice(i + 1), add, total, part);
        const checkSum = check(numbers.slice(i + 1), sum, total, part);
        const checkProduct = check(numbers.slice(i + 1), product, total, part);

        return checkSum || checkProduct || checkAdd;
    }
}

function part1(lines) {
    let sum = 0;

    for (let line of lines) {
        let divider = line.split(': ');
        let total = Number(divider[0]);
        let numbers = divider[1].split(' ').map(Number);

        const isPossible = check(numbers, numbers[0], total, 1);

        if (isPossible) {
            sum += total;
        }
    }


    return sum;
}

function part2(lines) {
    let sum = 0;

    for (let line of lines) {
        let divider = line.split(': ');
        let total = Number(divider[0]);
        let numbers = divider[1].split(' ').map(Number);

        const isPossible = check(numbers, numbers[0], total, 2);

        if (isPossible) {
            sum += total;
        }
    }


    return sum;
}

module.exports = { part1, part2 };
