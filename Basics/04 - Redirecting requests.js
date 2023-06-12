const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html><head><title>First page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form></body>')
        res.write('</html>')
        return res.end();
    } else if (url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>First page</title></head>');
    res.write('<body><h1>test</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(3000);