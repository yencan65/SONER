import React from 'react';
import { FaRegHandPeace } from 'react-icons/fa';

export default function App() {
  return (
    <>
      {/* Sol üst logo: FindAllEasy + 3D parmak simgesi + yıldız alanı */}
      <div style={{
        position:'fixed', top:20, left:28, display:'flex', alignItems:'center', gap:10, zIndex:1000
      }}>
        <span style={{
          fontWeight:700, fontSize:24, color:'#00BFFF',
          textShadow:'0 0 8px rgba(0,191,255,.6)'
        }}>FindAllEasy</span>
        <FaRegHandPeace size={32} style={{ filter:'drop-shadow(0 0 8px rgba(255,215,0,.8))' }}/>
        {/* ileride animasyonlu yıldız bileşeni buraya eklenecek */}
      </div>

      {/* Kahraman alanı */}
      <main style={{
        minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        background:'linear-gradient(120deg,#001F3F,#072B57,#0ea5e9)', color:'#fff', textAlign:'center'
      }}>
        <h1 style={{ fontSize:44, marginBottom:8 }}>Yazman yeterli, gerisini biz hallederiz.</h1>

        <div style={{ display:'flex', gap:8, marginTop:14 }}>
          <input placeholder="Ne arıyorsun?" style={{ padding:'10px 12px', width:360, borderRadius:10, border:'none' }} />
          <button style={{
            background:'#00BFFF', color:'#fff', border:'none', padding:'10px 16px', borderRadius:10, fontWeight:700, cursor:'pointer'
          }}>Ara</button>
        </div>

        <footer style={{ position:'absolute', bottom:18, fontSize:12, opacity:.9 }}>
          ©2025 Yapay zeka destekli global fiyat karşılaştırma asistanın.
          Güvenilir satıcıyla birlikte en uygun fiyatı senin için bulur. Parmak şıklatman yeter.
        </footer>
      </main>
    </>
  );
}
