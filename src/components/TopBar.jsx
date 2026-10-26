const TopBar = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "56px",
        backgroundColor: "#18181b",
        color: "#fbbf24",
        borderBottom: "2px solid #fbbf24",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
      }}
    >
      {props.title}
    </div>
  );
};

export default TopBar;
