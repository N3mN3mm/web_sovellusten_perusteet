class Henkilo{
    
    #osoite;

    constructor(a, b){
        this.nimi = a;
        this.ika = b;
        this.osoite = "Esimerkkitie 2, 00000 Helsinki";
    }
    esittele(){
        return "Henkilön nimi: " + this.nimi + "\nIkä: " + this.ika;
    }

    get osoite(){
        return this.#osoite;
    }

    set osoite(UusiOsoite){
        this.#osoite = UusiOsoite;
    }

    // setOsoite(uusiOsoite){ toteutus }
}

const henkilo1 = new Henkilo("John Doe", 30);
const henkilo2 = new Henkilo("Jamppa Jokunen", 35);
console.log(henkilo1.esittele());
console.log(henkilo2.esittele());
console.log(henkilo1.nimi);

henkilo1.nimi = "Testi";
console.log(henkilo1.nimi);

//Näin ei onnistu:
//console.log("Osoite: " + henkilo1.#osoite);
//Eikä näin:
//henkilo1.#osoite = "Testi";

// get hakee
console.log("Osoite: " + henkilo1.osoite);

// set muuttaa 
henkilo1.osoite = "Osoite muuttui";
console.log("Osoite: " + henkilo1.osoite);

// tavallisen metodin kautta
// henkilo1.setOsoite("Osoite muuttui");