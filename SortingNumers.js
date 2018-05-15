function Sorting(numbers) {
    numbers = numbers.map(n => Number(n));
    numbers.sort((a, b) => a > b);
    for (const number of numbers) {
        console.log(number);
    }
    console.log('end.');
}

Sorting(['4', '7', '10', '1', '15']);