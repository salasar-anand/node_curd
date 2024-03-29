function errorHandler ( err ,req, res,next){
    if (typeof err ===  "String"){
        return res.state(400).json({ message : err});

    }s

    if (err.name === "ValidationError" ){
        return res.status(400).json({message: err.message});
    }

    return res.status(500). json({ message: err.message});
};


module.exports  = {
    errorHandler
}