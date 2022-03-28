const http = require("http"); //provide between client and sever 
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");
// lets dev web server
const server = http.createServer((req,res) => {
    //when access from browser
    res.writeHead(200, {"Content-Type": "tect/html"});
    res.write(html);
    res.end();

    if(req.method == "GET") {
    }
    if(req.method == "POST") {
    }
});

//
server.listen(PORT, () => {
    console.log("server runnning!");
}); 