// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _pop1(arr){
    return arr.slice(0,arr.length-1)
    // return arr.slice(0,-1)
}

function _pop2(arr){
    return arr.filter((it,index,thisArr) => {
        return index !== thisArr.length-1
    })
}

function _pop3(arr){
    let newArr = arr.concat()
    newArr.pop()
    return newArr
}

let length1 = _pop1(arr)
let length2 = _pop2(arr)
let length3 = _pop3(arr)

console.log(arr)

console.log(length1)
console.log(length2)
console.log(length3)