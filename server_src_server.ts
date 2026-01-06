import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chainsRouter from './routes/chains';
import healthRouter from './routes/health';
import prepareRouter from './routes/prepare';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/chains', chainsRouter);
app.use('/api/health', healthRouter);
app.use('/api/prepare', prepareRouter);

app.get('/', (req, res) => res.json({ ok: true, service: 'crypton-backend' }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});