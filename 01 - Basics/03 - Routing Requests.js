const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>First page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form></body>')
        res.write('</html>')
        return res.end();
    }


    res.write('<html><head><title>First page</title></head>');
    res.write('<body><h1>test</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);