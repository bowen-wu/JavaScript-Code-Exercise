// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _square1(arr) {
    return arr.map((it) => {
        return it*it
    })
}

function _square2(arr) {
    let newArr = []
    arr.forEach((it) => {
        newArr.push(it*it)
    })
    return newArr
}

function _square3(arr) {
    let newArr = arr.slice(0)
    newArr.forEach((it,index,thisArr) => {
        thisArr[index] = Math.pow(it,2)
    })
    return newArr
}


let square1 = _square1(arr)
let square2 = _square2(arr)
let square3 = _square3(arr)

console.log('arr',arr)

console.log(square1)
console.log(square2)
console.log(square3)
