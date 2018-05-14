const http = require("http");

const server = http.createServer();

if(process.argv.length > 3) {
    console.error("do not accept more than one argument [port number to listen]");
    process.exit();
}

let port = parseInt(process.argv[2]) || 9000;

if (isNaN(port)) {
    console.error("port argument must be number type");
    process.exit();
}


console.log(`writeHead:\n\tAccess-Control-Allow-Origin: http://localhost:${port}`);

server.on("request", (request, response) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63343');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // console.log(req);
    // console.log(res);

    let body = [];

    request
        .on("error", (err) => {
            console.log(err);
        })
        .on("data", (data) => {
            body.push(data);
        })
        .on("end", ()  => {
            body = Buffer.concat(body).toString();

            console.log(body);

            response.writeHead(200, {
                'Access-Control-Allow-Origin': 'http://localhost:9000',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "Content-Type"
            });
            response.end('{"valid": true}');
        });

}).listen(8080);
