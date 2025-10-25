import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// örnek arama endpoint'i
app.get('/api/search', async (req, res) => {
  const q = (req.query.q || '').toString();
  // TODO: senin gerçek arama mantığın
  res.json({ query: q, results: [] });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
