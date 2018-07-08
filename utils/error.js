module.exports = {
    send: (error, req, res, code = 400) => {
        console.log(`error: ${JSON.stringify(error)}`)
        res.status(code).json({
            error: error
        })
    }
}