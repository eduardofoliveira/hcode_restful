module.exports = {
    user: (app, req, res) => {
        req.assert('_name', 'O nome é obrigatório').notEmpty()
        req.assert('_email', 'O email está inválido').notEmpty().isEmail()
        req.assert('_password', 'A senha deve ter no mínimo 8 caracteres').isLength({ min: 8 })

        let errors = req.validationErrors()

        if(errors){
            app.utils.error.send(errors, req, res)
            return false
        }else{
            return true
        }
    }
}