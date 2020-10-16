const jwt = require('jsonwebtoken');

module.exports = function auth (req,res,next){
    const token = req.header('authToken');
    //If theirs no token throw message access denied
    if(!token) return res.status(401).send('Access Denied');
    try{
        //If token is available verify it
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        //After verification show us the id 
        req.user = verified;
        next();
    }catch (err) {
        res.status(400).send('Invalid token');
    }
}