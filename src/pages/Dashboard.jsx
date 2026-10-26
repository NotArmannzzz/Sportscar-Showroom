import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import CardMobil from "../components/CardMobil";

const Dashboard = () => {
  const [mobilTerpilih, setMobilTerpilih] = useState(null);
  const daftarMobil = [
    {
      id: 1,
      nama: "Ferrari 488 GTB",
      spek: "3.9L V8 Twin-Turbo, 661 HP, 0-60 mph 3.0s",
      harga: "$254,000",
      gambar: "/cars/Ferrari 488 GTB.jpeg",
    },
    {
      id: 2,
      nama: "Lamborghini Huracan",
      spek: "5.2L V10, 602 HP, 0-60 mph 2.5s",
      harga: "$261,274",
      gambar: "/cars/Lamborghini Huracan.jpeg",
    },
    {
      id: 3,
      nama: "Porsche 911 Turbo S",
      spek: "3.8L Flat-6 Twin-Turbo, 640 HP, 0-60 mph 2.6s",
      harga: "$203,500",
      gambar: "/cars/Porsche 911 Turbo S.jpeg",
    },
    {
      id: 4,
      nama: "McLaren 720S",
      spek: "4.0L V8 Twin-Turbo, 710 HP, 0-60 mph 2.7s",
      harga: "$299,000",
      gambar: "/cars/McLaren 720S.jpeg",
    },
    {
      id: 5,
      nama: "Audi RS8 2025",
      spek: "4.0L, 630 HP, 0-60 mph 3.4s",
      harga: "$169,900",
      gambar: "/cars/Audi RS8 2025.jpeg",
    },
    {
      id: 6,
      nama: "BMW M8 Competition",
      spek: "4.4L V8 Twin-Turbo, 617 HP, 0-60 mph 3.0s",
      harga: "$146,000",
      gambar: "/cars/BMW M8 Competition.jpeg",
    },
  ];

  if (mobilTerpilih) {
    return (
      <div
        style={{
          backgroundColor: "#121212",
          minHeight: "100vh",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        <TopBar title={mobilTerpilih.nama} />

        <div
          style={{
            paddingTop: "90px",
            paddingBottom: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setMobilTerpilih(null)}
            style={{
              padding: "10px 16px",
              backgroundColor: "#f59e0b",
              color: "#000000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Kembali
          </button>

          {mobilTerpilih.gambar && (
            <img
              src={mobilTerpilih.gambar}
              alt={mobilTerpilih.nama}
              style={{
                width: "100%",
                maxWidth: "600px",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
                marginBottom: "24px",
              }}
            />
          )}

          <h1 style={{ color: "#fbbf24" }}>{mobilTerpilih.nama}</h1>

          <h2 style={{ color: "#fbbf24" }}>{mobilTerpilih.harga}</h2>

          <h3>Spesifikasi Mobil</h3>

          <p
            style={{
              color: "#d4d4d8",
              fontSize: "16px",
              lineHeight: "1.8",
            }}
          >
            {mobilTerpilih.spek}
          </p>
        </div>

        <BottomBar />
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Top Bar */}
      <TopBar title="ARMAN SPORTCAR" />

      {/* Konten Utama (Scrollable & Responsive) */}
      <div
        style={{
          paddingTop: "74px",
          paddingBottom: "84px",
          paddingLeft: "16px",
          paddingRight: "16px",
          maxWidth: "1080px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Banner / Header info */}
        <div
          style={{
            marginBottom: "20px",
            padding: "16px",
            backgroundColor: "#18181b",
            borderRadius: "12px",
            border: "1px solid #27272a",
          }}
        >
          <h2
            style={{
              margin: "0 0 6px 0",
              fontSize: "18px",
              color: "#fbbf24",
              fontWeight: "bold",
            }}
          >
            Koleksi Mobil Sport
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#a1a1aa",
            }}
          >
            Pilihan unit premium terbaik yang tersedia di showroom saat ini ({daftarMobil.length} unit).
          </p>
        </div>

        {/* Responsive Grid List Mobil */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {daftarMobil.map((mobil) => (
            <CardMobil key={mobil.id} nama={mobil.nama} spek={mobil.spek} harga={mobil.harga} gambar={mobil.gambar} onDetail={() => setMobilTerpilih(mobil)} />
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
};

export default Dashboard;
