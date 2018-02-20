// async+await 改进 ==> 基于 Promise
// 读取时可以像同步似的使用
 
let fs = require('fs')

function promisity(fn, ctx){
    return function(){
        let args = Array.prototype.slice.call(arguments)
        return new Promise((resolve, reject) => {
            fn.call(ctx, ...args, (err, data) => {
                if(err){
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

let readFileInPromise = promisity(fs.readFile, fs)

async function read(filePath){
    let fileContent = await readFileInPromise(filePath, 'utf8')
    let nextFile = await readFileInPromise(fileContent, 'utf8')
    let result = await readFileInPromise(nextFile, 'utf8')
    console.log(result)
}


read('./files/1.txt')