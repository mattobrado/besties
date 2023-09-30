import { Link, useNavigate } from "react-router-dom";
import { CONTENT, ROUTES } from "../constants/constants";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate(ROUTES.ROOT);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand h1">{CONTENT.appName}</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!auth.currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to={ROUTES.LOGIN}>
                  {CONTENT.logIn}
                </Link>
              </li>
            )}
            {!auth.currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to={ROUTES.SIGN_UP}>
                  {CONTENT.signUp}
                </Link>
              </li>
            )}
            {auth.currentUser && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>
                  {CONTENT.logOut}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
