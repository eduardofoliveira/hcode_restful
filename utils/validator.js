module.exports = {
    user: (app, req, res) => {
        req.assert('name', 'O nome é obrigatório').notEmpty()
        req.assert('email', 'O email está inválido').notEmpty().isEmail()
        req.assert('password', 'A senha deve ter no mínimo 8 caracteres').isLength({ min: 8 })

        let errors = req.validationErrors()

        if(errors){
            app.utils.error.send(errors, req, res)
            return false
        }else{
            return true
        }
    }
}