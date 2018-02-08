// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _shift1(arr){
    return arr.slice(1)
}

function _shift2(arr){
    let newArr = arr.concat()
    newArr.shift()
    return newArr
}

function _shift3(arr){
    return arr.filter((it,index,thisArr) => {
        return index !== 0
    })
}

let shift1 = _shift1(arr)
let shift2 = _shift2(arr)
let shift3 = _shift3(arr)

console.log('arr',arr)

console.log(shift1)
console.log(shift2)
console.log(shift3)
