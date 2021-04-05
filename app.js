const http = require("http");
const fs = require("fs")
const port = 3000;

const server = http.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    // Langkah 3 Membuat function render sendiri
    const renderHTML = (path, res) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write("Error: file not found")
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    
    const url = req.url;
    if (url === '/about') {
        // Cara 1 - 
        // res.write('<h1>Halaman About</a>')
        // res.end()

        // Cara 2 - fs
        // fs.readFile('./about.html', (err, data) => {
        //     if (err) {
        //         res.writeHead(404)
        //         res.write("Error: file not found")
        //     } else {
        //         res.write(data)
        //     }
        //     res.end()
        // })
        renderHTML('./about.html', res)
    } else if (url === '/contact') {
        // res.write('<h1>Halaman Contact</h1>')
        // res.end()
        renderHTML('./contact.html', res)
    } else {
        // res.write('<h1>Halaman Home</h1>')
        // res.end();
        
        // Cara 2 - fs
        // fs.readFile('./index.html', (err, data) => {
        //     if (err) {
        //         res.writeHead(404)
        //         res.write("Error: file not found")
        //     } else {
        //         res.write(data)
        //     }
        //     res.end()
        // })
        renderHTML('./index.html', res)
    }

})


server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})