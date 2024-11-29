function part1(mass) {
    return Math.floor(mass / 3) - 2;
}

function part2(mass) {
    let fuel = 0;
    while (mass > 0) {
        mass = part1(mass);
        fuel += mass;
    }
    return fuel;
}

module.exports = { part1, part2 };
