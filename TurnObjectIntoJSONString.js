function solve(args) {
    let obj = {};
    for (let input of args) {
        let inputs = input.split(" -> ");
        let key = inputs[0];
        let value = inputs[1];
        if (!isNaN(Number(value))) {
            value = Number(value);
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
}

solve(['name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
]);