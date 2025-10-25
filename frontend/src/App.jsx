import React from "react";
import LogoAnimated from "./components/LogoAnimated";

function App() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 25px",
          background: "linear-gradient(90deg, #001f3f, #0074D9)",
          color: "white",
        }}
      >
        <LogoAnimated />
      </header>

      <main style={{ textAlign: "center", marginTop: "100px" }}>
        <h2 style={{ color: "#0074D9" }}>Yazman yeterli, gerisini biz hallederiz.</h2>
      </main>
    </div>
  );
}

export default App;
