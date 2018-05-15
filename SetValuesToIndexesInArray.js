function solve(args) {
    let n = Number(args[0]);
    // another way to declare array
    let result = new Array(n);
    //let result = [];
    for (let i = 1; i < args.length; i++) {
        let input = args[i].split(" - ");
        let index = Number(input[0]);
        let value = input[1];
        result[index] = value;
    }
    for (let i = 0; i < n; i++) {
        if (result[i] === undefined) {
            result[i] = 0;
        }
    }
    //another way to print array
    result.forEach(x => console.log(x));
    //console.log(result.join('\n'));
}

solve(['3',
    '0 - 5',
    '1 - 6',
    '2 - 7'
]);
console.log();

solve(['2',
    '0 - 5',
    '0 - 6',
    '0 - 7'
]);
console.log();

solve(['5',
    '0 - 3',
    '3 - -1',
    '4 - 2'
]);
