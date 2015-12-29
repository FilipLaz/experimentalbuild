import API from "./api";

let Automobili = {
    dajSveAsveee() {
        return API.fetch("rezultati");
    }
}

export default Automobili;