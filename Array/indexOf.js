// 找出元素 item 在给定数组 arr 中的位置

let arr = [1,2,3,4]

function _indexOf1(arr,item){
    return arr.indexOf(item)
}

function _indexOf2(arr,item){
    for(let i = 0,len = arr.length; i < len; i++){
        if(arr[i] === item){
            return i
            break;
        }
    }
    return -1
}

let index1 = _indexOf1(arr,3)
let index2 = _indexOf2(arr,3)
let index3 = _indexOf2(arr,0)

console.log('index1',index1)
console.log('index2',index2)
console.log('index3',index3)
