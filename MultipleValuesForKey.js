function solve(args) {
    let results = new Map();
    for (let i = 0; i < args.length-1; i++) {
        let kvp = args[i].split(' ');
        let key = kvp[0];
        let value = kvp[1];
        if (!results.has(key)) {
            results.set(key, [value]);
        } else {
            results.get(key).push(value);
        }
    }
    let key = args[args.length-1];
    if (results.has(key)) {
        results.get(key).forEach(x => console.log(x));
    } else {
        console.log("None");
    }
}

solve(['key value',
    'key eulav',
    'test tset',
    'key'
]);
console.log();

solve(['3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);
console.log();

solve(['3 bla',    
    '3 alb',
    '2'
]);
console.log();