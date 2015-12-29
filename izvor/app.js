let Automobili = {
    dajSveAsveee() {
        return new Promise( (resolve, reject) => {
            let url = "http://localhost:3000/rezultati";
            let request = new XMLHttpRequest();

            //treci parametar je async(non blocking)
            request.open("get", url, true);
            request.onload = () => {
                if(request.status >= 200 && request.status < 400) {
                    resolve( JSON.parse(request.response) );
                }
            }

            request.onerror = () => {
                reject( new Error("nesto puklo") );
            }

            request.send();
        });
    }
}

let Rendanje = {
    rendajSvaKola(ulaz) {
        console.log("izlazz-->", ulaz);
    }
}

Automobili.dajSveAsveee()
    .then(Rendanje.rendajSvaKola)
    .catch( (error) => {
        console.log(error)
    });