module.exports = {
    helloWorld: (req, res, next) => {
        try {
            console.log('I entered the world Middleware')
            req.user = 'ore'
            next()
        } catch (error) {
            res.status(404).json({
                message: error.message,
                status: 'failed',
            })
        }
    },

    hello: (req, res, next) =>{
        try {
            console.log('hello, hope you are good!')
            next()
        } catch(error){
            res.status(404).json({
                message: error.message,
                status: 'failed',
            });
        }
    }
}