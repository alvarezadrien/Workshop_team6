import express from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// --- Routes CRUD ---
router.get("/", getAllProducts);         // GET tous les produits
router.get("/:id", getProductById);      // GET un produit par ID
router.post("/", createProduct);         // POST créer un produit
router.put("/:id", updateProduct);       // PUT modifier un produit
router.delete("/:id", deleteProduct);    // DELETE supprimer un produit

export default router;
