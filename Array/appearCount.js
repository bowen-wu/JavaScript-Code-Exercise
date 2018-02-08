// 统计数组 arr 中值等于 item 的元素出现的次数

let arr = [1, 2, 4, 4, 3, 4, 3]

function _count1(arr,item){
    return arr.filter((it) => {
        return it === item
    }).length
}

function _count2(arr,item){
    let i = 0
    arr.forEach((it) => {
        if(it === item){
            i += 1
        }
    })
    return i
}

function _count3(arr,item){
    return arr.reduce((count,currentValue) => {
        return currentValue === item ? count += 1 : count
    },0)
}

let count1 = _count1(arr,4)
let count2 = _count2(arr,4)
let count3 = _count3(arr,4)

console.log('arr',arr)

console.log(count1)
console.log(count2)
console.log(count3)