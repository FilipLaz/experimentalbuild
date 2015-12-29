let Rendanje = {
    rendajSvaKola(ulaz) {
        let generisaniHtml = ulaz.map( (kola) => {
            let {Marka, Konja, Godiste} = kola;
            return templejtKola(Marka, Konja, Godiste);
        });

        let target = document.querySelector(".js-main");
        target.innerHTML = generisaniHtml.join("");
    }
}

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

export default Rendanje;