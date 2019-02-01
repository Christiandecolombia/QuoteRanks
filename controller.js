const DBCollection  = require("./models");

module.exports = {

    getAll: (req, res)=>{
        DBCollection.find()
            .then(result => console.log("got all") || res.json(result))
            .catch(errors => console.log(errors) || res.json(errors));
    },
    
    getOne: (req, res) =>{
        console.log("////this is req.params.id from the controller.js")
        console.log(req.params.id)
        DBCollection.findById(req.params.id)
            .then(result => console.log("/////this is results from controller ",result) || res.json(result))
            .catch(errors => console.log(errors) || res.json(errors));
    },

    create: (req, res) =>{
        const DATA = req.body;
        DBCollection.create(DATA)
            .then(result => res.json(result))
            .catch(errors => res.json(errors));
    },
    
    update: (req, res) =>{
        const ID = req.params.id;
        console.log("this is ID")
        console.log(ID);
        DBCollection.findByIdAndUpdate(ID,req.body)
            .then(result => res.json(result))
            .catch(errors => res.json({"error":errors}));
    },
    createNested: (req, res) =>{
        console.log("this is request body")
        console.log(req.body);
        const ID = req.params.id;
        console.log("this is ID")
        console.log(ID);
        console.log("this is {quotes: req.body}????????????????????????????????????????????????????????")
        console.log({quotes: req.body});
        DBCollection.findByIdAndUpdate(ID, {$push: {quotes: req.body}},{runValidators: true})
            .then(result =>res.json(result))
            .catch(errors => res.json(errors));
    },

    delete: (req, res) => {
        const ID = req.params.id;
        console.log("this is ID to delete", ID)
        DBCollection.findByIdAndDelete(ID)
            .then(result => console.log("deleted") || res.json(result))
            .catch(errors=> console.log(errors) || res.json(errors));
    },

}
