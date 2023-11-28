

const list = ['primer item', 'segundo item', 'tercer item'];
const [a,b] = list;
// console.log(a,b);


// const obj = {
//     name: 'Jorge',
//     age: 33,
//     country: 'MX'
// };

// const c = obj.name;
// const d = obj.age

const {name: c, age: d} = {name: 'Jorge', age: 33, country: 'MX'};
console.log(c, d);

const model = 'Camaro';

const car = {
    model, // model: model
    year: 1969,
    color: 'red',
    engine: 'V8'
};
// const {year, color, engine} = car;
// console.log(year, color, engine);

const [ x, y, ...A] = list;
console.log(x, y, A);


const {engine, ...B} = car;
console.log(engine, B);


const numbers = [1,2,3,4];

const letters = ['a', 'b', 'c', 'd'];


const mix = [...numbers,99999, ...numbers];
console.log(mix);


const porsche = {
    model: '911',
    year: 1963,
    color: 'red',
    engine: 'V8'

};

const ferrari = {
    model: 'testarrossa',
    ...porsche,
    wheels: 4,
}
console.log(ferrari);