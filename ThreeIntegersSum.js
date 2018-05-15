function solution(arr) {
    let nums = arr[0].split(' ').map(n => Number(n));
    if (nums[0] + nums[1] == nums[2]) {
        if (nums[0] <= nums[1]) {
            console.log(`${nums[0]} + ${nums[1]} = ${nums[2]}`);
        } else {
            console.log(`${nums[1]} + ${nums[0]} = ${nums[2]}`);
        }
    } else if (nums[0] + nums[2] == nums[1]) {
        if (nums[0] <= nums[2]) {
            console.log(`${nums[0]} + ${nums[2]} = ${nums[1]}`);
        } else {
            console.log(`${nums[2]} + ${nums[0]} = ${nums[1]}`);
        }
    } else if (nums[1] + nums[2] == nums[0]) {
        if (nums[1] <= nums[2]) {
            console.log(`${nums[1]} + ${nums[2]} = ${nums[0]}`);
        } else {
            console.log(`${nums[2]} + ${nums[1]} = ${nums[0]}`);
        }
    } else {
        console.log("No");
    }
}
solution(['1 4 5']);
solution(['1 7 5']);