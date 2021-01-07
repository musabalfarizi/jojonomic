const mongoose = require("mongoose");
const FolderSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "folder",
  },
  is_public: {
    type: Boolean,
  },
  owner_id: {
    type: String,
  },
  share: {
    type: Array,
  },
  company_id: {
    type: String,
  },
  timestamp: {
    type: String,
  },
});

module.exports = mongoose.model("Folder", FolderSchema);
