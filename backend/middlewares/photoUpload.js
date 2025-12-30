const multer = require("multer");

const photoUpload = multer({ storage: multer.memoryStorage() });

module.exports = photoUpload;
