import { Router } from 'express';

const router = Router();

// Placeholder for asset routes
router.get('/', (req, res) => {
  res.json([
    { id: '1', name: 'London Prime Real Estate', type: 'REAL_ESTATE', valuation: 2500000, yield: 12.4, status: 'VERIFIED' },
    { id: '2', name: 'Sahara Solar Farm', type: 'RENEWABLE_ENERGY', valuation: 5000000, yield: 15.2, status: 'ACTIVE' }
  ]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Sample Asset', description: 'This is a sample asset description.' });
});

export default router;
