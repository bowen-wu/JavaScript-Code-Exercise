// 找出数组 arr 中重复出现过的元素

let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]

function _duplicates1(arr){
    let newArr = []
    let newArray = []
    arr.forEach((it,index) => {
        if(newArr.indexOf(it) === -1){
            newArr.push(it)
        }else if(newArray.indexOf(it) === -1){
            newArray.push(it)
        }
    })
    return newArray
}

function _duplicates2(arr){
    let newArr = []
    arr.map((it, index, thisArr) => {
        if (thisArr.filter((item) => {
            return item === it
        }).length > 1 && newArr.indexOf(it) === -1) {
            newArr.push(it)
        }
    })
    return newArr
}

function _duplicates3(arr){
    let newArr = []
    arr.forEach((it,index) => {
        if(arr.indexOf(it) !== arr.lastIndexOf(it) && newArr.indexOf(it) === -1){
            newArr.push(it)
        }
    })
    return newArr
}

function _duplicates4(arr){
    let sortArr = arr.slice(0).sort()
    let newArr = []
    sortArr.forEach((it,index,thisArr) => {
        if(it === thisArr[index+1] && newArr.indexOf(it) === -1){
            newArr.push(it)
        }
    })
    return newArr
}

function _duplicates5(arr){ 
    return arr.slice(0).sort().filter((it,index,thisArr) => {
        return it === thisArr[index+1] && it !== thisArr[index-1]
    })
}

let duplicates1 = _duplicates1(arr)
let duplicates2 = _duplicates2(arr)
let duplicates3 = _duplicates3(arr)
let duplicates4 = _duplicates4(arr)
let duplicates5 = _duplicates5(arr)

console.log('arr',arr)

console.log(duplicates1)
console.log(duplicates2)
console.log(duplicates3)
console.log(duplicates4)
console.log(duplicates5)