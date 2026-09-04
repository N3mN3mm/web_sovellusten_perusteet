//template literal parametrit
//perinteinen tapa sijoittaa muuttuja merkkijonoon
/* 
Esimerkki perinteinen tapa:
let age = 20;
let tervehdys = "Hei, olen Teppo ja ikäni on " + age + " ja tykkään urheilusta";
console.log(tervehdys);
Esimerkki template literal
let viesti = `Hei, olen Jaakko ja ikäni on ${age}`;
console.log(viesti);
*/

function describe(name, age = 0){
    let viesti = `Hei! Olen ${name} ja olen ${age}-vuotias`;
    return viesti;
}

console.log(describe("Mona"));

let viesti2 = function(name, age){
    viesti2 = `Hei! Olen ${name} ja olen ${age}-vuotias`;
    return viesti2;
}

console.log(viesti2("Emma", 28));

let viesti3 = (name, age) => `Hei! Olen ${name} ja olen ${age}-vuotias`;
console.log(viesti3("Elli", 2));