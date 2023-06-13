const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html><head><title>First page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form></body>')
        res.write('</html>')
        return res.end();
    } else if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(body);
        })
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1]
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>First page</title></head>');
    res.write('<body><h1>test</h1></body>')
    res.write('</html>')
    res.end();
}
module.exports = requestHandler;