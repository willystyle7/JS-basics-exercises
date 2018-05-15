function ProductOfNumbers(numbersStr) {
    let numbers = numbersStr.map(Number);
    let countNegatives = 0;
    for (const number of numbers) {
        if (number == 0) {
            console.log('Positive');
            return;
        }
        if (number < 0) {
            countNegatives++;
        }
    }
    console.log((countNegatives % 2 == 0) ? "Positive" : "Negative");    
}

ProductOfNumbers(['2', '3', '-1']);
ProductOfNumbers(['5', '4', '3']);
ProductOfNumbers(['0', '3', '-1']);
ProductOfNumbers(['-3', '-4', '-5']);