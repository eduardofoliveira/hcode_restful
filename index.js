const http = require('http')

let server = http.createServer((req, res) => {

    console.log(`URL: ${req.url}`)
    console.log(`Method: ${req.method}`)

    switch(req.url){
        case '/':
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        res.end('<h1>Olá</h1>')
        break

        case '/users':
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json;charset=UTF-8')
        res.end(JSON.stringify({
            users: [{
                name: 'Eduardo',
                email: 'eduardo@cloudcom.com.br',
                id: 1
            }]
        }))
        break
    }

})

server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running...')
})