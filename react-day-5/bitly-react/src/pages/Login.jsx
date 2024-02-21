import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  async function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);

    try {
      const response = await axios.post(
        "https://bitly-clone-2.onrender.com/api/login",
        values
      );
      const token = response.data.jwt;
      // Save the token to local storage to call private APIs
      localStorage.setItem("token", token);

      navigate("/dashboard");
      alert("Logged in successfully");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={navigateToHome}>Back</button>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email or username" name="identifier" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
