// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置

let arr = [1,2,3,1,4,5,6,1]

function _findAllOccurrences1(arr,target){
    let newArr = []
    arr.forEach((item,index) => {
        // if(item === target){
        //     newArr.push(index)
        // }

        // item !== target || newArr.push(index)

        item === target && newArr.push(index)

    })
    return newArr
}

function _findAllOccurrences2(arr,target){
    let newArr = []
    arr.filter((item,index) => {
        // return item === target && newArr.push(index)

        return item !== target || newArr.push(index)
    })
    return newArr
}

function _findAllOccurrences3(arr,target){
    let newArr = [], index = arr.indexOf(target)
    while(index !== -1){
        newArr.push(index)
        index = arr.indexOf(target,index+1)
    }
    return newArr
}

let findAllOccurrences1 = _findAllOccurrences1(arr,1)
let findAllOccurrences2 = _findAllOccurrences2(arr,1)
let findAllOccurrences3 = _findAllOccurrences3(arr,1)

console.log(arr)

console.log(findAllOccurrences1)
console.log(findAllOccurrences2)
console.log(findAllOccurrences3)