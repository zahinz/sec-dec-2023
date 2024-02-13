import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleNavigateToHome() {
    navigate("/");
  }
  function handleNavigateToAbout() {
    navigate("/about");
  }
  function handleNavigateToExample() {
    navigate("/example");
  }

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "white",
    padding: "0.5rem",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>zahinzul.com</h2>
      <div>
        <button style={buttonStyle} onClick={handleNavigateToHome}>
          Home
        </button>
        <button style={buttonStyle} onClick={handleNavigateToAbout}>
          About
        </button>
        <button style={buttonStyle} onClick={handleNavigateToExample}>
          Example
        </button>
      </div>
    </div>
  );
}

export default Header;
