const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // write files
    // res.write('<p>hello, ninjas</p>');
    
    // end response
    // res.end();
    
    // read files, send the data of the file as a response to the browser
    // fs.readFile('./pages/index.html', (err, data)=> {
    //     if(err) {
    //         console.log(err);
    //         res.end();
    //     } else {
    //         res.write(data);
    //         res.end();
    //     }
    // })

    let path = './pages/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
        res.statusCode = 301; // perm redirect
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end()
        }
    })
});

server.listen(3000, 'localhost', ()=> {
    console.log('listening for request on port 3000')
});

