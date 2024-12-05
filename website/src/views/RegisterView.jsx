import "./RegisterView.css";
import { Link } from "react-router-dom";

function RegisterView() {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="form-container">
          <h2>Create an Account</h2>
          <form action="#" method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />

            <button type="submit" className="register-button">
              Register
            </button>
          </form>

          <p className="login-link">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterView;
