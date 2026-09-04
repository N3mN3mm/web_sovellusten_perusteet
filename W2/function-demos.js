let x = 5;

console.log('x arvo on '+x);

function hello(){
    console.log("Hello world!");
}

hello();

/*
x = function() {
    console.log("Hello unnamed function");
}

x();

let y = hello;

y();

function funktionSuorittaja(suoritettava){
    suoritettava();
}

funktionSuorittaja(x);
funktionSuorittaja(y);
*/

// arrow function
function summa(a, b, c){
    return a + b + c;
}

const summaArrow = (a,b,c) => a+b+c; // palauttaa laskennan tuloksen, vaikka return puuttuu

const summaArrow2 = (a,b,c) => {
    return a + b + c;
}

//jos on vain yksi parametri, ei tarvita sulkumerkkejä parametrille
const yhdenParamArrow = x => x*5;


console.log(summa(1,2,3));
console.log(summaArrow(1,2,3));
console.log(summaArrow2(1,2,3));
console.log(yhdenParamArrow(2));

// Testataan rest-parametria
function sum(...nums){
    return nums.reduce((a,b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));