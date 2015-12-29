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
        let templejtKola = function(Marka, Konja, Godiste) {
            //vazno je returnovati templejt string
            return `<div class="main__item">
                <div class="main__item__part">
                    Godiste
                    <div>${Godiste}</div>
                </div>
                <div class="main__item__part">
                    Marka:
                    <div>${Marka}</div>
                </div>
                <div class="main__item__part">
                    Konja:
                    <div>${Konja}</div>
                </div>
            </div>`
        };

        let generisaniHtml = ulaz.map( (kola) => {
            let {Marka, Konja, Godiste} = kola;
            return templejtKola(Marka, Konja, Godiste);
        });

        let target = document.querySelector(".js-main");
        target.innerHTML = generisaniHtml.join("");
    }
}

Automobili.dajSveAsveee()
    .then(Rendanje.rendajSvaKola)
    .catch( (error) => {
        console.log(error)
    });