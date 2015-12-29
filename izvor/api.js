 import BASE_URL from "./specs";

 let API = {
    fetch(putanja) {
        return new Promise( (resolve, reject) => {
            let url = `${BASE_URL}/${putanja}`;
            let request = new XMLHttpRequest();

            //treci parametar je async(non blockin g)
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
 };

 export default API;