import React, { useState } from "react";
import { FaRegHandPeace } from "react-icons/fa";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "https://sonerbackend.onrender.com";

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0e182a, #001122)",
        color: "white",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Üst başlık */}
      <h1 style={{ fontSize: "2.5rem", color: "#00c6ff", marginBottom: "0.5rem" }}>
        <FaRegHandPeace style={{ marginRight: "8px" }} />
        FindAllEasy
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#ccc" }}>
        Yazman yeterli, gerisini biz hallederiz.
      </p>

      {/* Arama kutusu */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Ne arıyorsun?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{
            padding: "10px 16px",
            width: "300px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#00c6ff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ara
        </button>
      </div>

      {/* Yükleniyor veya hata */}
      {loading && <p style={{ marginTop: "1rem" }}>Yükleniyor...</p>}
      {error && <p style={{ marginTop: "1rem", color: "#ff7675" }}>{error}</p>}

      {/* Arama sonuçları */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "2rem",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        {results.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.price ? `${item.price} ₺` : "Fiyat bilgisi yok"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
