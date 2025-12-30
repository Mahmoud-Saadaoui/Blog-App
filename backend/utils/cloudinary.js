const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Upload single image to Cloudinary from buffers (Multer)
const uploadSingleImageToCloudinary = async (image, folder = "EShopty") => {
  const base64 = image.buffer.toString("base64");
  const mimeType = image.mimetype;

  const uploadResponse = await cloudinary.uploader.upload(
    `data:${mimeType};base64,${base64}`,
    {
      folder: "Blog App",
      secure: true,
      rejectUnauthorized: false,
    }
  );

  return uploadResponse;
};

// Cloudinary Remove Image
const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const result = await cloudinary.uploader.destroy(imagePublicId);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

// Cloudinary Remove Multiple Image
const cloudinaryRemoveMultipleImage = async (publicIds) => {
  try {
    const result = await cloudinary.v2.api.delete_resources(publicIds);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

module.exports = {
  uploadSingleImageToCloudinary,
  cloudinaryRemoveImage,
  cloudinaryRemoveMultipleImage,
};