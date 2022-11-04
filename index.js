let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let salariesArr = Object.values(salaries);

let sum = salariesArr.reduce((acc, item) => acc + item, 0);

console.log(sum);


// Option with an empty object below

let wages = {};

let wagesArr = Object.values(wages);

let totalWages = wagesArr.reduce((acc, item) => acc + item, 0);

console.log(totalWages);