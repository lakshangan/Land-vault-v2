import app from './app.js';
import dotenv from 'dotenv';
import { prisma } from './config/database.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
