import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import Routes
import userRoute from './routes/user_routes.js';
import authRoute from './routes/auth_routes.js';
import barangRoute from './routes/barang_routes.js';
import peminjamanRoute from './routes/peminjaman_routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/inventory', barangRoute);
app.use('/api/inventor', peminjamanRoute);

// Start Server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
