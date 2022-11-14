const {v4: uuidv4 } = require('uuid')

module.exports = async (req, res, next) => {
    let id = req.cookies.userId
    if (!id) {
        id = uuidv4()
        res.cookie('userId', id, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'developer',
            sameSite: 'Lax',
            sign: true,
            maxAge: 24 * 60 * 60 * 1000
        })
    }
    req.userId = id
    next()
};