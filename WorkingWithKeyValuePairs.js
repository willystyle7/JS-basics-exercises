function solve(args) {
    let results = new Map();
    for (let i = 0; i < args.length - 1; i++) {
        let kvp = args[i].split(' ');
        let key = kvp[0];
        let value = kvp[1];
        results.set(key, value);
    }
    let key = args[args.length - 1];
    if (results.has(key)) {
        console.log(results.get(key));
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