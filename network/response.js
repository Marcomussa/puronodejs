module.exports = {
    success: (req, res, msg, status) => {
        res.status(status || 200).send({
            errors: '',
            body: msg,
            query: req.query 
        })
    },
    error: (req, res, msg, status, details) => {
        console.error(details)
        res.status(status || 500).send({
            errors: msg,
            body: ''
        })
    },
    successPOST: (req, res, msg, status) => {
        const { name, surname, user, message } = req.body
        res.status(status || 200).send({
            req: {
                name,
                surname,
                user,
                message
            },
            body: msg,
            errors: '',
            query: req.query,
            status
        })
    },
    errorPOST: (req, res, msg, status, details) => {
        console.error(details)
        res.status(status || 404).send([{
            error: msg,
            body: '',
            status
        }])
    }
}