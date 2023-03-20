const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
};

const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

const getOneTea = function(req,res,next){
	res.json({ message: `tea Obtained is ${req.params.name}` })
}

const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

module.exports = { 
	getAllTea, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea

}