function move(matrix, position, direction, count, moves) {
    const visited = new Set(moves.map(pos => `${pos.x},${pos.y}`));
    let currentPos = position;
    let currentDir = direction;
    let totalCount = count;

    while (true) {
        const nextPos = { ...currentPos };

        switch (currentDir) {
            case 'up':
                nextPos.y--;
                break;
            case 'down':
                nextPos.y++;
                break;
            case 'left':
                nextPos.x--;
                break;
            case 'right':
                nextPos.x++;
                break;
        }

        // Check bounds
        if (nextPos.x < 0 || nextPos.x >= matrix[0].length ||
            nextPos.y < 0 || nextPos.y >= matrix.length) {
            return totalCount + 1;
        }

        // Check wall collision
        if (matrix[nextPos.y][nextPos.x] === '#') {
            // Change direction
            switch (currentDir) {
                case 'up': currentDir = 'right'; break;
                case 'right': currentDir = 'down'; break;
                case 'down': currentDir = 'left'; break;
                case 'left': currentDir = 'up'; break;
            }
            continue;
        }

        // Check if position was visited
        const posKey = `${nextPos.x},${nextPos.y}`;
        if (!visited.has(posKey)) {
            totalCount++;
            visited.add(posKey);
        }

        currentPos = nextPos;
    }
}

function part1(lines) {
    let matrix = lines.map(line => line.split(''));
    let position = { x: 0, y: 0 };

    // Find starting position marked by '^'
    const startRow = matrix.findIndex(row => row.includes('^'));
    const startCol = matrix[startRow].indexOf('^');
    position = { x: startCol, y: startRow };

    const count = move(matrix, position, 'up', 0, [position]);
    return count;
}

module.exports = { part1 };
