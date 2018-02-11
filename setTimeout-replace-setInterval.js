let i = 1,j = 1,timer = null
timer = setTimeout(function fn(){
    console.log(i)
    i += 1
    timer = setTimeout(fn,1000)
},1000)






function mySetInterval(cb,time){
    let temp = function(){
        setTimeout(temp,time)
        cb.call()
    }
    setTimeout(temp,time)
}
function cb(){
    console.log(j)
    j += 1
}

mySetInterval(cb,1000)
