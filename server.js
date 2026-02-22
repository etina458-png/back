import 'dotenv/config'; // ← Must stay at the TOP
import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

// ✅ CORS FIRST
app.use(cors({
  origin: "https://front-gamma-wine.vercel.app/"
}));

// ✅ THEN body parser
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Listen LAST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
