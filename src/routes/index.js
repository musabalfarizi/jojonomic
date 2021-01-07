const express = require("express");

const router = express.Router();
const folderController = require("../controllers/folderController");
const documentController = require("../controllers/documentController");
const authenticateToken = require("../middleware/auth");

router.use(authenticateToken);
router.get("/", folderController.getAll);
router.post("/folder", folderController.setFolder);
router.delete("/folder", folderController.deleteFolder);
router.get("/folder/:folder_id", documentController.getFolderFiles);

router.post("/document", documentController.setDocument);
router.get("/document/:document_id", documentController.getDocumentDetail);
router.delete("/document", documentController.deleteDocument);

module.exports = router;
