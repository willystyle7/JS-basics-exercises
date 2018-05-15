function solve(args) {
    let people = [];
    for (let input of args) {
        let inputs = input.split(" -> ");
        let person = {};
        person.Name = inputs[0];
        person.Age = inputs[1];
        person.Grade = inputs[2];
        people.push(person);
    }
    for (let person of people) {
        for (let key of Object.keys(person)) {
            console.log(`${key}: ${person[key]}`)
        }
    }
}

solve(['Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
]);