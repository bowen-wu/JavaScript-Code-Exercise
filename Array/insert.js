// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

let arr = [1, 2, 3, 4]

function _insert1(arr,item,index){
    let newArr = arr.slice(0)
    newArr.splice(index,0,item)
    return newArr
}

function _insert2(arr,item,index){
    let newArr = arr.slice(0,index)
    newArr.push(item)
    return newArr.concat(arr.slice(index))
}

function _insert3(arr,item,index){
    let newArr = arr.slice(index)
    newArr.unshift(item)
    return arr.slice(0,index).concat(newArr)
}

function _insert4(arr,item,index){
    return arr.slice(0,index).concat(item,arr.slice(index))
}

let insert1 = _insert1(arr,'z',2)
let insert2 = _insert2(arr,'z',2)
let insert3 = _insert3(arr,'z',2)
let insert4 = _insert4(arr,'z',2)

console.log(arr)

console.log(insert1)
console.log(insert2)
console.log(insert3)
console.log(insert4)