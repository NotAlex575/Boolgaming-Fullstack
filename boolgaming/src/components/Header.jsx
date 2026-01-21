import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-dark border-bottom border-success">
      <div className="container-fluid d-flex align-items-center justify-content-between py-3">

        <Link to="/" className="ms-3">
          <img
            src={logo}
            alt="Boolgaming"
            style={{ height: "80px" }}
            className="d-block"
          />
        </Link>

        <nav className="d-flex gap-4 me-4">
          <Link className="text-success text-decoration-none fw-semibold" to="/">Home</Link>
          <Link className="text-success text-decoration-none fw-semibold" to="/about">Chi sono</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
