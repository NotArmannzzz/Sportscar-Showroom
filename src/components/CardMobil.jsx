import { useState } from "react";
const CardMobil = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#1f1f23",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        border: "1px solid #3f3f46",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Gambar / Placeholder */}
      <div
        style={{
          width: "100%",
          height: "170px",
          backgroundColor: "#27272a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#d4d4d8",
          fontSize: "14px",
          overflow: "hidden",
          borderBottom: "1px solid #3f3f46",
        }}
      >
        {props.gambar ? (
          <img src={props.gambar} alt={props.nama} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ textAlign: "center", padding: "10px" }}>
            <span style={{ display: "block", fontSize: "28px", marginBottom: "4px" }}>🏎️</span>
            <span>{props.nama}</span>
          </div>
        )}
      </div>

      {/* Info Mobil */}
      <div style={{ padding: "12px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            margin: "0 0 6px 0",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          {props.nama}
        </h3>
        <p
          style={{
            margin: "0 0 14px 0",
            fontSize: "12px",
            color: "#a1a1aa",
            lineHeight: "1.4",
            flex: 1,
          }}
        >
          {props.spek}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "auto",
            paddingTop: "8px",
            borderTop: "1px solid #27272a",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "#fbbf24",
            }}
          >
            {props.harga}
          </span>
          <button
            onClick={() => props.onDetail(props.id)}
            style={{
              padding: "7px 10px",
              backgroundColor: "#f59e0b",
              color: "#000000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMobil;
