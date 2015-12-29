let Automobili = {
    dajSveAsveee() {
        return new Promise( (resolve, reject) => {
            resolve("OVO RADI");
        });
    }
}

let Rendanje = {
    rendajSvaKola(ulaz) {
        console.log("izlazz-->", ulaz);
    }
}

Automobili.dajSveAsveee().then(Rendanje.rendajSvaKola);