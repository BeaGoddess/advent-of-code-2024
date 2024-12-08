function move(matrix, position, direction, count, moves) {

    switch (direction) {
        case 'up':
            if (position.y - 1 < 0) {
                return count + 1;
            }

            if (matrix[position.y - 1][position.x] !== '#') {
                if (!moves.find(move => move.x === position.x && move.y === position.y - 1)) {
                    count++;
                }

                return move(matrix, { x: position.x, y: position.y - 1 }, direction, count, [...moves, position]);
            } else {
                return move(matrix, position, 'right', count, moves);
            }
        case 'down':
            if (position.y + 1 >= matrix.length) {
                return count + 1;
            }

            if (matrix[position.y + 1][position.x] !== '#') {
                if (!moves.find(move => move.x === position.x && move.y === position.y + 1)) {
                    count++;
                }

                return move(matrix, { x: position.x, y: position.y + 1 }, direction, count, [...moves, position]);
            } else {
                return move(matrix, position, 'left', count, moves);
            }

        case 'left':
            if (position.x - 1 < 0) {
                return count + 1;
            }

            if (matrix[position.y][position.x - 1] !== '#') {
                if (!moves.find(move => move.x === position.x - 1 && move.y === position.y)) {
                    count++;
                }

                return move(matrix, { x: position.x - 1, y: position.y }, direction, count, [...moves, position]);
            } else {
                return move(matrix, position, 'up', count, moves);
            }

        case 'right':
            if (position.x + 1 >= matrix[position.y].length) {
                return count + 1;
            }

            if (matrix[position.y][position.x + 1] !== '#') {
                if (!moves.find(move => move.x === position.x + 1 && move.y === position.y)) {
                    count++;
                }

                return move(matrix, { x: position.x + 1, y: position.y }, direction, count, [...moves, position]);
            } else {
                return move(matrix, position, 'down', count, moves);
            }
    }
}


function part1(lines) {
    let matrix = lines.map(line => line.split(''));

    let position = { x: 0, y: 0 };

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === '^') {
                position = { x, y };
            }
        }
    }

    const count = move(matrix, position, 'up', 0, [position]);

    return count;
}

module.exports = { part1 };
