
 async function asyncSumatorio(max) {
        if (max < 0 || typeof max !== 'number') {
            throw new Error('invalid number');
        }
        let sum = 0;
        for (let i = 1; i <= max; i++) {
            sum += i;
        }
        return sum;
}


// let x = asyncSumatorio(3)
// x.then(console.log).catch(console.error);
// console.log('end main thread');




async function main() {
    try {
        let result = await asyncSumatorio(3);
        console.log(result);
        let result2 = await asyncSumatorio(result);
        console.log(result2);
    } catch (error) {
        console.error(error);
    }

}

main();