const Document = require('../models/Document')
const Folder = require('../models/Folder')

const getFolderFiles = async (req,res) => {
    let {folder_id} = req.params
    try {
        folders = await Document.find({folder_id:folder_id})
        return res.status(200).json({
            error:false,
            data:folders
        })
    } catch (error) {
        return res.status(500).json({
            error:true
        })
    }
}

const setDocument = async (req,res) => {
    let {id,name,type,folder_id,content,timestamp,owner_id,share,company_id} = req.body
    if (owner_id == 0){
        owner_id = req.user.user_id
    }
    try {
        const newDocument = new Document({
            id:id,
            name:name,
            type:type,
            folder_id:folder_id,
            content:content,
            timestamp:timestamp,
            owner_id:owner_id,
            share:share,
            company_id:company_id
        })
        createdDocument = await newDocument.save()
        return res.status(201).json({
            error:false,
            message:"Success set Document",
            data: createdDocument
        })
    } catch (error) {
        return res.status(500).json({
            error:true
        })
    }
}

const getDocumentDetail = async(req,res) => {
    let {document_id} = req.params
    try {
        document = await Document.findOne({id:document_id})
        return res.status(200).json({
            error:false,
            data:{document:document}
        })
    } catch (error) {
        return res.status(500).json({
            error:true
        })
    }
}

const deleteDocument = async (req,res) => {
    let {id} = req.body
    try {
        Document.deleteOne({ id: id }, function (err) {
            if (err) return res.status(500).json({error:true})
            return res.status(200).json({
                error:false,
                message:"Success delete document"
            })
          })
        
    } catch (error) {
        return res.status(500).json({error:true})
    }
}

module.exports = {getFolderFiles,setDocument,getDocumentDetail,deleteDocument}