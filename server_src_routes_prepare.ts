import { Router } from 'express';
import { prepareBridge } from '../controllers/prepareController';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const payload = await prepareBridge(req.body);
    res.json(payload);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'prepare failed' });
  }
});

export default router;