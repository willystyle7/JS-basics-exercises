function solve(args) {
    let people = [];
    for (let input of args) {
        let obj = JSON.parse(input);
        people.push(obj);
    }
    for (let person of people) {
        console.log(`Name: ${person["name"]}`);
        console.log(`Age: ${person["age"]}`);
        console.log(`Date: ${person["date"]}`);
    }
}

solve(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);