function syncFn(a,b) {
    return a + b;
}



console.time('timeout');
setTimeout(() => {
    console.timeEnd('timeout');
}, 0);

let i = 0;

while (i < 1e9) {
    i++;
}