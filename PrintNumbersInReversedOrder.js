function PrintNumbersInReversedOrder(nums){
	nums = nums.reverse();
	console.log(nums.join('\n'));
}


function solution(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

PrintNumbersInReversedOrder(['10','15','20']);
PrintNumbersInReversedOrder(['5','5.5','24','-3']);
PrintNumbersInReversedOrder(['20','1','20','1','20']);

