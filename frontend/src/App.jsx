import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // Örnek backend isteği (şimdilik test amaçlı)
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => console.log("Bağlantı başarılı:", res.data))
      .catch(err => console.error("Bağlantı hatası:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>FindAllEasy</h1>
      <p>Yazman yeterli, gerisini biz hallederiz.</p>
    </div>
  );
}

export default App;
