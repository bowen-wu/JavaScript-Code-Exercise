let fs = require('fs')

function readSync(filePath){
    let fileContent = fs.readFileSync(filePath, 'utf8')
    let nextFile = fs.readFileSync(fileContent, 'utf8')
    let result = fs.readFileSync(nextFile, 'utf8')
    console.log(result)
}

readSync('./files/1.txt')