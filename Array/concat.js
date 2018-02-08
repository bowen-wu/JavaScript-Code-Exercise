// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

let arr1 = [1, 2, 3, 4]
let arr2 = ['a', 'b', 'c', 10]

function _concat1(arr1,arr2){
    return arr1.concat(arr2)
}

function _concat2(arr1,arr2){
    return arr1.slice(0).concat(arr2)
}

function _concat3(arr1,arr2){
    let newArr = arr1.slice(0);
    [].push.apply(newArr,arr2)
    return newArr
}

function _concat4(arr1,arr2){  // 数据类型变为字符串
    let str = arr1.toString() + ',' + arr2.toString()
    return str.split(',')
}


let concat1 = _concat1(arr1,arr2)
let concat2 = _concat2(arr1,arr2)
let concat3 = _concat3(arr1,arr2)
let concat4 = _concat4(arr1,arr2)

console.log('arr1',arr1)
console.log('arr2',arr2)

console.log(concat1)
console.log(concat2)
console.log(concat3)
console.log(concat4)