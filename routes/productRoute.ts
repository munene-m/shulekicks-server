import express from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import {
  addProduct,
  updateProduct,
  getProducts,
  getProduct,
  deleteProduct,
} from "../controllers/productController";
import { adminProtect } from "../middleware/adminMiddleware";
const router = express.Router();

router.route("/add").post(adminProtect, upload.single("image"), addProduct);
router
  .route("/update/:id")
  .put(adminProtect, upload.single("image"), updateProduct);
router.route("/").get(getProducts);
router.route("/:id").get(getProduct);
router.route("/delete/:id").delete(adminProtect, deleteProduct);

export default router;
