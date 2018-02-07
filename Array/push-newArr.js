// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _push1(arr,item){
    let newArr = arr.slice(0)
    newArr.push(item)
    // newArr.splice(arr.length,0,item)
    // newArr[arr.length] = item
    return newArr
}

function _push2(arr,item){
    return arr.concat([item])
}

function _push3(arr,item){
    let newArr = [item];
    [].unshift.apply(newArr,arr)
    return newArr
}

let newLength1 = _push1(arr,10)
let newLength2 = _push2(arr,10)
let newLength3 = _push3(arr,10)

console.log(arr)

console.log(newLength1)
console.log(newLength2)
console.log(newLength3)