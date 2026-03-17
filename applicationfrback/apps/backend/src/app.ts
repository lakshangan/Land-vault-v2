import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { errorHandler } from './utils/errors.js';
import authRoutes from './routes/auth.js';
import assetRoutes from './routes/assets.js';

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/assets', assetRoutes);

// Error handler
app.use(errorHandler);

export default app;
