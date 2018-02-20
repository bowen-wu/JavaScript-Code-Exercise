// 将回调金字塔改为 Promise
// 优点：
// 1. 可以在最后一个地方捕获 error
// 2. 解决回调金字塔

let fs = require('fs')

function promisity(fn, ctx){
    return function(){
        let args = Array.prototype.slice.call(arguments)
        return new Promise((resolve, reject) => {
            fn.call(ctx, ...args, (err, data) => {  // ctx 指定上下文
                if(err){
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

let readFileInPromise = promisity(fs.readFile, fs)  // fs 是 fs.readFile 的上下文（this）

function read(filePath){
    readFileInPromise(filePath, 'utf8')
    .then(fileContent => readFileInPromise(fileContent, 'utf8'))
    .then(nextFile => readFileInPromise(nextFile, 'utf8'))
    .then(result => console.log(result))
    .catch(err => console.log(err))
}

read('./files/1.txt')