import { MouseEventHandler } from "react";
import content from "../content";

const EmailForm = ({
  buttonText,
  isSignUp,
  onClick,
  setEmail,
  setPassword,
}: {
  buttonText: String;
  isSignUp?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{content.emailAddress}</label>
        <input
          className="form-control"
          aria-describedby="emailHelp"
          id="email-address"
          name="email"
          type="email"
          required
          placeholder={content.emailAddress}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isSignUp && (
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">{content.password}</label>
        <input
          className="form-control"
          aria-describedby="emailHelp"
          id="password"
          name="password"
          type="password"
          required
          placeholder={content.password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
      </div>
      <div>
        <button className="btn btn-primary" onClick={onClick}>
          {buttonText}
        </button>
      </div>{" "}
    </form>
  </div>
);
export default EmailForm;
