let _isPlainObj = (obj) => {
    if (typeof obj !== 'object' || obj === null) return false
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(obj) === proto
}

let _execFn = function (fn) {
    if (typeof fn === 'function') {
        return fn()
    }

    return fn
}

let pickTrue = (...args) => {
    let trueCollections = []
    let len = args.length

    for (let i = 0; i < len; i++) {
        let arg = args[i]
        if (!arg)
            continue;
        let type = typeof arg

        if (type === 'string' || type === 'number') {
            trueCollections.push(arg)
        } else if (Array.isArray(arg) && arg.length) {
            let arrayReturn = pickTrue.apply(null, arg)   // 使用apply 保证了pickTrue 里面为一系列的参数
            trueCollections.push(arrayReturn)
        } else if (_isPlainObj(arg)) {
            for (let k in arg) {
                if (arg.hasOwnProperty(k) && _execFn(arg[k])) {
                    trueCollections.push(k)
                }
            }
        } else if (type == 'function') {
            let fnReturn = arg()
            let fnResult = pickTrue.apply(null, [fnReturn])
            trueCollections.push(fnResult)
        }
    }

    return trueCollections.join(' ')
}


module.exports = pickTrue

