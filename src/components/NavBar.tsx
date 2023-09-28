import { Link, useNavigate } from "react-router-dom";
import content from "../content";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand h1">{content.appName}</span>
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
                <Link className="nav-link" to={`login`}>
                  {content.logIn}
                </Link>
              </li>
            )}
            {!auth.currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to={`sign-up`}>
                  {content.signUp}
                </Link>
              </li>
            )}
            {auth.currentUser && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>
                  {content.logOut}
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
