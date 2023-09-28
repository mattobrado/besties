import { MouseEventHandler, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import content from "../content";
import EmailForm from "./EmailForm";

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
    <>
      <EmailForm
        buttonText={content.signUp}
        isSignUp={true}
        onClick={onSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <p className="text-sm text-center">
        {content.goToLoginMessage}{" "}
        <NavLink to="/login">{content.logIn}</NavLink>
      </p>
    </>
  );
};

export default SignUp;
