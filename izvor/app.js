import Automobili from "./automobili";
import Rendanje from "./rendanje";

Automobili.dajSveAsveee()
    .then(Rendanje.rendajSvaKola)
    .catch( (error) => {
        console.log(error);
    });