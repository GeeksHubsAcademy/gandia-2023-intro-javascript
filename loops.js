
const fruits = [
    'apple',
    'banana',
    'orange',
]

for (let item of fruits) {

    if (item === 'banana') {
        continue;
    }
    console.log(item);
}