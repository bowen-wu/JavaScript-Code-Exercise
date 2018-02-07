// 计算给定数组 arr 中所有元素的总和

let arr = [1,2,3,4]

function _sum1(arr){
    return arr.reduce((a,b) => {return a + b},0)
}

function _sum2(arr){
    let sum = 0
    arr.forEach((it) => {
        sum += it
    })
    return sum
}

let sum1 = _sum1(arr)
let sum2 = _sum2(arr)

console.log(sum1)
console.log(sum2)