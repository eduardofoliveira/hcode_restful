module.exports = (app) => {

    app.get('/users', (req, res) => {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/json; charset=utf-8')
        res.json({
            users: [{
                name: 'Eduardo Olá',
                email: 'eduardo@cloudcom.com.br',
                id: 1
            }]
        })
    
    })
    
    app.post('/users', (req, res) => {
    
        res.json(req.body)
    
    })

}