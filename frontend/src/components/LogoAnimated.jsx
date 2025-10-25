import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegHandSparkles } from "react-icons/fa";
import snapSound from "../assets/snap.mp3";

export default function LogoAnimated() {
  const audioRef = useRef(null);

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "700",
          fontSize: "1.5rem",
          color: "#00bcd4",
        }}
      >
        FindAllEasy
      </h1>
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        transition={{ duration: 0.6 }}
        onHoverStart={handleHover}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <FaRegHandSparkles size={28} color="gold" />
        {/* Altın yıldız animasyonu */}
        <motion.div
          animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            position: "absolute",
            top: "-8px",
            left: "20px",
            fontSize: "14px",
            color: "gold",
          }}
        >
          ✨
        </motion.div>
      </motion.div>
      <audio ref={audioRef} src={snapSound} preload="auto" />
    </div>
  );
}
