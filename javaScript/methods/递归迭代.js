// 阶乘
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let cur = factorial(3);
console.log(cur);
