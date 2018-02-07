// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _unshift1(arr,item){
    let newArr = arr.slice(0)
    newArr.unshift(item)
    // newArr.splice(0,0,item)
    return newArr
}

function _unshift2(arr,item){
    return [item].concat(arr)
}

function _unshift3(arr,item){
    let newArr = [item];
    [].push.apply(newArr,arr)
    return newArr
}

let unshift1 = _unshift1(arr,10)
let unshift2 = _unshift2(arr,10)
let unshift3 = _unshift3(arr,10)

console.log('arr',arr)

console.log(unshift1)
console.log(unshift2)
console.log(unshift3)