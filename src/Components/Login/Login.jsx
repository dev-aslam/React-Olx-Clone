import "./Login.css";
import { authenticate } from "../../authenticate";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn } = useAuth();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate({ email, password })
      .then((user) => {
        console.log(user);
        setIsLoggedIn(true, user.displayName);
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="userLoginId"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
