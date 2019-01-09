// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function twoSum1(array, target) {
    let arr = []
    array.forEach((item, index, thisArr) => {
        thisArr.forEach((item2, index2) => {
            if(item + item2 === target && index !== index2) {
                arr = [index, index2];
            }
        })
    });
    return arr;
}

function twoSum2(array, target) {
    let arr = [];
    let obj = {}
    array.forEach((item, index) => {
        obj[item] = index;
    });
    array.some((item, index) => {
        let targetNum = target - item;
        if(obj[targetNum] && obj[targetNum] !== index){
            arr = [index, obj[targetNum]];
            return true;
        }
    });
    return arr;
}

function twoSum3(array, target) {
    let arr = [];
    let obj = {};
    array.forEach((item, index) => {
        let targetNum = target - item;
        if(obj[targetNum] === 0 || obj[targetNum]){
            arr = [index, obj[targetNum]];
            return true;
        }
        obj[item] = index;
    })
    return arr;
}

let array = [3, 3];
let target = 6;
let result = twoSum3(array, target);
console.log('result', result);
