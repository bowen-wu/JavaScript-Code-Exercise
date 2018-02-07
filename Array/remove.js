// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

let arr1 = [1, 2, 2, 3, 4, 2, 2]
let arr2 = [1, 2, 2, 3, 4, 2, 2]
let arr3 = [1, 2, 2, 3, 4, 2, 2]

function _remove1(arr, item) {
    for(let i = 0,len = arr.length; i <= len; i++){
        if(arr[i] === item){
            arr.splice(i,1)
            i -= 1
        }
    }
    return arr
}

function _remove2(arr,item){
    while(arr.indexOf(item) !== -1){
        arr.splice(arr.indexOf(item),1)
    }
    return arr
}

function _remove3(arr,item){
    arr.forEach((it) => {
        let i = arr.indexOf(item)
        arr.splice(i,1)
    })
    return arr
}

let remove1 = _remove1(arr1,2)
let remove2 = _remove2(arr2,2)
let remove3 = _remove3(arr3,2)


console.log(remove1)
console.log(remove2)
console.log(remove3)