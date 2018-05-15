function Largest3(nums){
	nums = nums.sort((a,b) => Number(a) > Number(b)).reverse();
	for (var i = 0; i < ((nums.length > 3) ? 3 : nums.length); i++){
		console.log(nums[i]);
	}	
}

function solution(arr) {
    let nums = arr.map(Number).sort((a, b) => b - a);
    for (var i = 0; i < Math.min(3, nums.length); i++) {
        console.log(nums[i]);
    }
}