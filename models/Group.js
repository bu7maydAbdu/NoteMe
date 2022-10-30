const mongoose = require("mongoose")

const groupSchema = new mongoose.Schema ({
groupName : {
    type: String, 
    required : true
}, 
createdBy : {

    type : String ,
    required : true

}, 
groupMembers : {

    type : Array,
    required : true

}



})


module.exports = mongoose.model("Group", groupSchema)