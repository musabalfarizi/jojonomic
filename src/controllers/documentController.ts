const Document = require("../models/documentModel");
const Redis = require("ioredis");
const redis = new Redis();

const getFolderFiles = async (req, res) => {
  let { folder_id } = req.params;
  try {
    checkCache = await redis.get("folders");
    if (checkCache) {
      return res.status(200).json({
        err: false,
        data: JSON.parse(checkCache),
      });
    }
    folders = await Document.find({ folder_id: folder_id });
    await redis.set("folders", JSON.stringify(folders));
    return res.status(200).json({
      error: false,
      data: folders,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
    });
  }
};

const setDocument = async (req, res) => {
  let {
    id,
    name,
    type,
    folder_id,
    content,
    timestamp,
    owner_id,
    share,
    company_id,
  } = req.body;
  if (owner_id == 0) {
    owner_id = req.user.user_id;
  }
  try {
    const newDocument = new Document({
      id: id,
      name: name,
      type: type,
      folder_id: folder_id,
      content: content,
      timestamp: timestamp,
      owner_id: owner_id,
      share: share,
      company_id: company_id,
    });
    createdDocument = await newDocument.save();
    checkCache = await redis.get("all");
    cache = JSON.parse(checkCache);
    cache.push(createdDocument);
    await redis.set("all", JSON.stringify(cache));
    return res.status(201).json({
      error: false,
      message: "Success set Document",
      data: createdDocument,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
    });
  }
};

const getDocumentDetail = async (req, res) => {
  let { document_id } = req.params;
  try {
    checkCache = await redis.get("document");
    if (checkCache) {
      document = JSON.parse(checkCache);
      if (document.id == document_id) {
        return res.status(200).json({
          error: false,
          data: { document: document },
        });
      } else {
        document = await Document.findOne({ id: document_id });
        await redis.set("document", JSON.stringify(document));
        return res.status(200).json({
          error: false,
          data: { document: document },
        });
      }
    }
    document = await Document.findOne({ id: document_id });
    await redis.set("document", JSON.stringify(document));
    return res.status(200).json({
      error: false,
      data: { document: document },
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
    });
  }
};

const deleteDocument = async (req, res) => {
  let { id } = req.body;
  try {
    checkCache = await redis.get("all");
    Document.deleteOne({ id: id }, async function (err) {
      if (err) return res.status(500).json({ error: true });
      if (checkCache) {
        cache = JSON.parse(checkCache);
        for (let index = 0; index < cache.length; index++) {
          if (cache[index].id == id) {
            cache.splice(index, 1);
          }
        }
        await redis.set("all", JSON.stringify(cache));
      }
      return res.status(200).json({
        error: false,
        message: "Success delete document",
      });
    });
  } catch (error) {
    return res.status(500).json({ error: true });
  }
};

module.exports = {
  getFolderFiles,
  setDocument,
  getDocumentDetail,
  deleteDocument,
};
