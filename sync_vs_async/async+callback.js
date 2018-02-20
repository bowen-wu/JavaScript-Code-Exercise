//  回调金字塔
let fs = require('fs')

function read(filePath){
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
        fs.readFile(fileContent, 'utf8', (err, nextFile) => {
            fs.readFile(nextFile, 'utf8', (err, result) => {
                console.log(result)
            })
        })
    })
}

read('./files/1.txt')