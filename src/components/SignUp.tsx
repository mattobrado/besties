import { MouseEventHandler, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import content from "../content";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <form>
              <div>
                <label htmlFor="email-address">{content.emailAddress}</label>
                <input
                  type="email"
                  label={content.emailAddress}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={content.emailAddress}
                />
              </div>

              <div>
                <label htmlFor="password">{content.password}</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder={content.password}
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                {content.signUp}
              </button>
            </form>

            <p className="text-sm text-center">
              {content.goToLoginMessage}{" "}
              <NavLink to="/login">{content.logIn}</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
