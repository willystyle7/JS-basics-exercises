function solve(commands) {
    let result = [];
    for (const input of commands) {
        let command = '';
        let index;
        [command, index] = input.split(' ');
        if (command === "add") {
            result.push(index);
        } else {
            if (index) {
                result.splice(index, 1);
            }
        }
    }
    result.forEach(x => console.log(x));
}

solve(['add 3',
    'add 5',
    'add 7'
]);
console.log();

solve(['add 3',
    'add 5',
    'remove 1',
    'add 2'
]);
console.log();

solve(['add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7'
]);
console.log();