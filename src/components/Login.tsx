import { MouseEventHandler, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, NavLink, useNavigate } from "react-router-dom";
import content from "../content";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <form>
              <div>
                <label htmlFor="email-address">{content.emailAddress}</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder={content.emailAddress}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder={content.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-sm text-center">
              {content.goToSignUpMessage} <Link to={`/signUp`}>sign up</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
