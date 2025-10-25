import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/search", (req, res) => {
  const q = req.query.q || "";
  res.json({
    query: q,
    results: [
      { name: "Deneme ürünü 1", price: 199 },
      { name: "Deneme ürünü 2", price: 299 },
    ],
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
