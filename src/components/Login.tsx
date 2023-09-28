import { MouseEventHandler, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import content from "../content";
import EmailForm from "./EmailForm";

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
      <EmailForm
        buttonText={content.logIn}
        onClick={onLogin}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <p className="text-sm text-center">
        {content.goToSignUpMessage}{" "}
        <Link to={`/sign-up`}>{content.signUp}</Link>
      </p>
    </>
  );
};

export default Login;
