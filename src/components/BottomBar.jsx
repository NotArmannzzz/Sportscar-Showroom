import { useNavigate, useLocation } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      color: isActive ? "#fbbf24" : "#a1a1aa",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: isActive ? "bold" : "normal",
      padding: "6px 0",
    };
  };

  const logoutButtonStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    color: "#ef4444",
    cursor: "pointer",
    fontSize: "12px",
    padding: "6px 0",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: "#18181b",
        borderTop: "2px solid #d97706",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 1000,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.5)",
      }}
    >
      {/* Dashboard */}
      <button style={getButtonStyle("/dashboard")} onClick={() => navigate("/dashboard")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px" }}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span style={{ marginTop: "2px" }}>Dashboard</span>
      </button>

      {/* Profil */}
      <button style={getButtonStyle("/profile")} onClick={() => navigate("/profile")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px" }}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <span style={{ marginTop: "2px" }}>Profil</span>
      </button>

      {/* Logout */}
      <button style={logoutButtonStyle} onClick={() => navigate("/login")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "24px", height: "24px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        <span style={{ marginTop: "2px" }}>Logout</span>
      </button>
    </div>
  );
};

export default BottomBar;
