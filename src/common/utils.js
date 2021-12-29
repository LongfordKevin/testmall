export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

// 合成版
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
export function debounce_all(func, wait, immediate) {
    let timer = null;
    return function(...args) {
        let context = this
        if (timer) clearTimeout(timer)
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait)
            if (callNow) func.apply(context, args)
        }else {
            timer = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
        
    }
}

export function throtttle(func, wait, type) {
    if(type === 1) {
        let previous = 0
    } else if(type === 2) {
        let timeout
    }
    return function(...args) {
        let context = this
        if(type === 1) {
            let now = Date.now()
            if(now - previous > wait) {
                func.apply(context, args)
                previous = now
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}