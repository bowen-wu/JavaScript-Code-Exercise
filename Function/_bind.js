function fn(a, b, c){
    console.log(this.d + a + b + c)
}

Function.prototype._bind1 = function(obj){
    let args = Array.prototype.slice.call(arguments, 1)
    let bindObj = this
    return function() {
        let args2 = [].slice.call(arguments)
        return bindObj.apply(obj, args.concat(args2))
    }
}

let curryFn1 = fn._bind1({d: 4}, 1, 2)
curryFn1(3)