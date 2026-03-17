import { Router } from 'express';

const router = Router();

// Placeholder for auth routes
router.post('/nonce', (req, res) => {
  res.json({ nonce: 'MOCK_NONCE_123456' });
});

router.post('/verify', (req, res) => {
  res.json({ token: 'MOCK_JWT_TOKEN', user: { wallet: '0x123...' } });
});

export default router;
