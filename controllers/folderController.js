const Document = require('../models/Document')
const Folder = require('../models/Folder')

const getAll = async(req, res)=>{
    try {
        let data = []
        documents = await Document.find()
        folders = await Folder.find()
        data = documents.concat(folders)
        res.status(200).json({error:false,data})
    } catch (error) {
        res.status(500).json({error:true})
    }
}

const setFolder = async(req,res)=>{
    let {id,timestamp,name} = req.body
    let user_id = req.user.user_id
    let company_id = req.user.company_id
    try {
        const folder = await Folder.findOne({id:id})

        if(folder){
            console.log(folder)
            folder.id = id
            folder.name = name
            folder.timestamp = timestamp

            updatedData = await folder.save()
            return res.status(201).json({
                error:false,
                message: "folder created",
                data:updatedData
            })
        }

        newFolder = new Folder({
            id:id,
            name:name,
            timestamp:timestamp,
            owner_id:user_id,
            company_id:company_id
        })
        newData = await newFolder.save()
        return res.status(201).json({
            error:false,
            message: "folder created",
            data:newData
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error:true
        })
    }
}

const deleteFolder = async (req,res) => {
    let {id} = req.body
    try {
        Folder.deleteOne({ id: id }, function (err) {
            if (err) return res.status(500).json({error:true});
            return res.status(200).json({
                error:false,
                message:"Success delete folder"
            })
          });
    } catch (error) {
        return res.status(500).json({
            error:true
        })
    }
}



module.exports = {getAll,setFolder,deleteFolder}