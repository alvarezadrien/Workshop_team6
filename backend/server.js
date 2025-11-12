import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// --- Import des routes ---
import productRoutes from "./routes/productRoutes.js";

// --- Charger les variables d'environnement ---
dotenv.config();

// --- Initialiser Express ---
const app = express();

// --- Middleware ---
app.use(express.json()); // Pour lire le JSON dans les requêtes
app.use(cors()); // Autoriser les requêtes entre ton front et ton back
app.use(morgan("dev")); // Logger les requêtes dans la console
app.use(cookieParser()); // Lire les cookies si tu fais de l'authentification

// --- Routes ---
app.use("/api/products", productRoutes); // Routes pour les produits

// --- Route de test ---
app.get("/", (req, res) => {
    res.json({ message: "🚀 Serveur backend fonctionnel !" });
});

// --- Connexion à MongoDB ---
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connecté à MongoDB"))
    .catch((err) => console.error("❌ Erreur de connexion MongoDB :", err));

// --- Lancement du serveur ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`💻 Serveur lancé sur le port ${PORT}`);
});
