// 编写一个javscript函数 fn，该函数有一个参数 n（数字类型），其返回值是一个数组，
// 该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。
// 1. 对 n 的取值范围做校验 [2,32]
// 2. 对 n 是否为数字做校验
// 3. 对 n 是否存在做校验
// 健壮性

function fn1(n){
    let min = 2,max = 32 
    let newArr = []
    let index = 0,number
    while(index < n){
        number = Math.ceil(Math.random()*(max-min)) + min
        if(newArr.indexOf(number) === -1){
            newArr.push(number)
            index += 1
        }
    }
    return newArr
}

function fn2(n){
    let min = 2,max = 32
    let newArr = []
    let index = 0,number
    while(index < n){
        number = Math.ceil(Math.random()*(max-min)) + min
        if(!newArr.includes(number)){
            newArr.push(number)
            index += 1
        }
    }
    return newArr
}


let arr1 = fn1(5)
let arr2 = fn2(5)

console.log(arr1)
console.log(arr2)
console.log(Math.ceil(0))