// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

let arr = [1,2,3,4,2]

function _remove1(arr,item){
    return arr.filter((it) => {return it !== item})
}

function _remove2(arr,item){
    let newArr = []
    arr.forEach((it) => {
        if(it !== item){
            newArr.push(it)
        }  
    })
    return newArr
}

let remove1 = _remove1(arr,2)
let remove2 = _remove2(arr,2)

console.log(remove1)
console.log(remove2)
