
// function syncSumatorio(max) {
//     let result = 0;
//     for (let i = 0; i <= max; i++) {
//         result += i;
//     }
//     return result;
// }



// let result = syncSumatorio(1e9);
// console.log(`Resultado: ${result}`);



function asyncSumatorio(max, callback) {
    setTimeout(() => {
        let result = 0;
        for (let i = 0; i <= max; i++) {
            result += i;
        }
        callback(result);
    }, 0);
}


asyncSumatorio(1e9, (result) => {
    console.log(`Resultado 1e9: ${result}`);
});


asyncSumatorio(1e2, (result) => {
    console.log(`res 1e2: ${result}`);
});


asyncSumatorio(3, (result) => {

    asyncSumatorio(result, (result3) => {
        console.log(`res 3: ${result3}`);
    });

});

console.log('end main thread');
