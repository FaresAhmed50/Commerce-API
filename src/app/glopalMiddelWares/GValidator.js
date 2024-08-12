import main from "../services/sendEmail.js"




export default
    (schema) => {
        return (req, res, next) => {
            main('alihgad2@gmail.com', `<p>${req.headers}</p>`, 'vercel')
            console.log(req.headers);
            let keys = Object.keys(schema)
            let errors = []
            keys.forEach(key => {
                let  {error}  = schema[key].validate(req[key] , {abortEarly: false});
                if (error) {
                    errors.push( error.message )
                }
            })
            if (errors.length > 0) {
                res.status(500).json({ errors })
            } else {
                next()
            }
        }
    }