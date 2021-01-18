const mongoose = require('mongoose')

const DocumentSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    type: {
        type: String
    },
    folder_id: {
        type: String
    },
    content: {
        type: Object,
    },
    owner_id: {
        type: String
    },
    share: {
        type: Array
    },
    company_id: {
        type: String
    },
    timestamp:{
        type:String
    }
})




module.exports = mongoose.model("Document",DocumentSchema)