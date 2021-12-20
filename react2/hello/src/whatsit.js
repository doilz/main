// person = () => {
//     return {
//          a: "papa",
//          b: 20,
//          c: "Wallstreet"
//     };
// }

const person = {
    a: "papa",
    b: 20,
    c: "Wallstreet"
}
// const { a, b, c } = person;
const printA = ({a}) => {
    console.log(a);
}
printA(person);


const arr = [1, person, 3, 4];
const [a1, b1, c1, d1] = arr;
const { a, b, c } = b1;
console.log(arr);
console.log(b1);
console.log(a);

const printArr = (b1) => {
    console.log(b1)
};

const printNotArr = ({w}) => {
    console.log(w)
};



printName(person);
printArr(arr);
printNotArr(arr);