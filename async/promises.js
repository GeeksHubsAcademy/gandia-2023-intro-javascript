
function promiseSumatorio(max) {
    return new Promise((resolve, reject) => {
        if (max < 0 || typeof max !== 'number') {
            reject('invalid number');
            return;
        }
        let sum = 0;
        for (let i = 1; i <= max; i++) {
            sum += i;
        }
        resolve(sum);

    });
}


promiseSumatorio('hola')
    .then(result => console.log(result))
    .catch(error => console.error(error))



// promiseSumatorio(3)
//     .then(res3 => {
//         promiseSumatorio(res3)
//         .then(resUltimo => console.log(resUltimo))
//     })

promiseSumatorio(3)
    .then(promiseSumatorio)
    .then(console.log)
    .catch(console.error);


promiseSumatorio(3)
    .then(r => -1 * r)
    .then(r => promiseSumatorio(r))
    .then(finalResult => console.log('final result: ' + finalResult))
    .catch(err => console.error('ups: ' + err));
