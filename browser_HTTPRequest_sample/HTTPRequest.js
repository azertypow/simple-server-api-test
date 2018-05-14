export default class HTTPRequest {

    constructor() {
        console.log("hello from class");
    }

    sendJSON() {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {

            // readyState -> 4 [The operation is complete]
            if (request.readyState === XMLHttpRequest.DONE) {
                if(request.status === 200) {
                    console.log(`Réponse reçue:\n\t${request.statusText}`);
                } else {
                    console.log(`Statue de la réponse:\n\t${request.status} ${request.statusText}`);
                }
            }
        });

        request.open("POST", "http://localhost:8080", true);
        request.setRequestHeader("Content-Type", "text/plain");
        request.send("hello");
    }
}
