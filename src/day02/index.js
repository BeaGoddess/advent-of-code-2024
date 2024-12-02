const checkConditions = (array) => {
    let totalSafe = 0;

    for (let i = 0; i < array.length; i++) {
        let firstRule = {
            increase: false,
            decrease: false,
        };

        let isSafe = true;

        for (let j = 0; j < array[i].length - 1; j++) {
            const first = array[i][j]
            const second = array[i][j + 1]

            let increase = first - second < 0;
            let decrease = first - second > 0;

            // Check first rule
            if (increase) {
                if (!firstRule.increase) firstRule.increase = true

                // Break Rule
                if (firstRule.decrease) isSafe = false

            } else if (decrease) {
                if (!firstRule.decrease) firstRule.decrease = true

                // Break Rule
                if (firstRule.increase) isSafe = false

            } else if (first - second === 0) {
                // Break Rule (don't increase/decrease)
                isSafe = false;
            }

            // Check second rule
            if (Math.abs(first - second) > 3) isSafe = false;

        }

        if (isSafe) totalSafe++;
    }

    return totalSafe;
}


function part1(lines) {
    const newLines = lines.map(l => l.split(' ').map(Number));
    return checkConditions(newLines);
}

function part2(lines) {
    const newLines = lines.map(l => l.split(' ').map(Number));
    let totalSafe = 0;

    for (let i = 0; i < newLines.length; i++) {
        const possibilites = [newLines[i]]

        for (let m = 0; m < newLines[i].length; m++) {
            let newArray = [...newLines[i]];
            newArray.splice(m, 1)
            possibilites.push(newArray);
        }

        if (checkConditions(possibilites) > 0) totalSafe += 1
    }
    return totalSafe;
}

module.exports = { part1, part2 };
