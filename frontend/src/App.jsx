import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/api/search?q=${query}`);
      setResults(response.data.results || []);
    } catch (err) {
      console.error(err);
      setError("Sunucuya bağlanılamadı, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">FindAllEasy 🌍</h1>
      <input
        type="text"
        placeholder="Ne arıyorsun?"
        className="border rounded-lg px-4 py-2 w-80 text-center"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Ara
      </button>

      {loading && <p className="mt-4 text-gray-500">Yükleniyor...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item, index) => (
          <div key={index} className="border rounded-xl p-4 shadow">
            <h3 className="font-semibold">{item.name || "Ürün"}</h3>
            <p>{item.price ? `${item.price} ₺` : "Fiyat bilgisi yok"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
