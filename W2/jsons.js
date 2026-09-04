let henkilo = { }; //json olio

let henkilo1 = {
    ika: 4,
    nimi: "Teppo"
};

let henkilo2 = {
    ika: 3,
    nimi: "Liisa"
};

let ryhma = {
    nimi: "Haituvat",
    lapset: [
        henkilo1, henkilo2
    ]
}

console.log(henkilo1.ika);
console.log(henkilo1);

henkilo1.ika = 10;

henkilo1.osoite = "Testi";

console.log(henkilo1);
console.log(henkilo2);
console.log(ryhma);

//tähän voitaisiin tehdä loop joka käy läpit kaikki lapset
console.log(ryhma.lapset[0].nimi);

//ja tähän sama, joka laskee sitten iät yhteen ja jakaa nimien määrällä = iän keskiarvo
console.log(ryhma.lapset[0].ika);