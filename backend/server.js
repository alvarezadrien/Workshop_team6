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
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ✅ Configuration CORS : autorise ton site Render et ton front local
app.use(
    cors({
        origin: [
            "http://localhost:3000", // ton front local
            "https://les-mains-florales.onrender.com", // ton site Render (production)
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// --- Servir les fichiers statiques (images, etc.) ---
app.use("/assets", express.static("assets"));

// --- Routes ---
app.use("/api/products", productRoutes);

// --- Route de test ---
app.get("/", (req, res) => {
    res.json({ message: "🚀 Serveur backend fonctionnel et connecté à MongoDB !" });
});

// --- Connexion à MongoDB ---
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connecté à MongoDB"))
    .catch((err) => console.error("❌ Erreur de connexion MongoDB :", err.message));

// --- Lancement du serveur ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`💻 Serveur lancé sur le port ${PORT}`);
});
