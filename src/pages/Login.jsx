import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesanError, setPesanError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "arman@test.com" && password === "sportscar") {
      setPesanError("");
      navigate("/dashboard");
    } else {
      setPesanError("Email atau password salah!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#18181b",
          border: "1px solid #d97706",
          padding: "36px 28px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "380px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.7)",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        {/* Header Box */}
        <h2
          style={{
            textAlign: "center",
            margin: "0 0 8px 0",
            color: "#fbbf24",
            fontWeight: "bold",
            fontSize: "22px",
            letterSpacing: "0.5px",
          }}
        >
          ARMAN SPORTCAR
        </h2>
        <p
          style={{
            textAlign: "center",
            margin: "0 0 24px 0",
            fontSize: "13px",
            color: "#a1a1aa",
          }}
        >
          Masuk ke akun Showroom Anda
        </p>

        {/* Pesan Error */}
        {pesanError && (
          <div
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.15)",
              border: "1px solid #ef4444",
              color: "#fca5a5",
              padding: "10px 12px",
              borderRadius: "8px",
              fontSize: "13px",
              marginBottom: "18px",
              textAlign: "center",
            }}
          >
            {pesanError}
          </div>
        )}

        {/* Form Login */}
        <form onSubmit={handleLogin}>
          {/* Input Email */}
          <div style={{ marginBottom: "18px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "13px",
                color: "#d4d4d8",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="arman@test.com"
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                backgroundColor: "#27272a",
                color: "white",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          {/* Input Password */}
          <div style={{ marginBottom: "26px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "13px",
                color: "#d4d4d8",
                fontWeight: "500",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="sportscar"
              required
              style={{
                width: "100%",
                padding: "11px 14px",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                backgroundColor: "#27272a",
                color: "white",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#f59e0b",
              color: "#000000",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
