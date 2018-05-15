function MultiplyDivideNumber(numbers) {
    let numberN = Number(numbers[0]);
    let numberX = Number(numbers[1]);
    if (numberX >= numberN) {
        console.log(numberN * numberX);
    } else {
        console.log(numberN / numberX);
    }
}

MultiplyDivideNumber(['2', '3']);
MultiplyDivideNumber(['13', '13']);
MultiplyDivideNumber(['3', '2']);
MultiplyDivideNumber(['144', '12']);