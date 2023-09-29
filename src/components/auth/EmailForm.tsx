import { MouseEventHandler } from "react";
import CONTENT from "../../constants/content";
import { Link, Path } from "react-router-dom";

const EmailForm = ({
  buttonText,
  goToButtonText,
  goToMessage,
  goToRoute,
  isSignUp,
  onClick,
  setEmail,
  setPassword,
}: {
  buttonText: String;
  goToButtonText: String;
  goToMessage: String;
  goToRoute: Partial<Path>;
  isSignUp?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div className="card m-3 p-4">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">{CONTENT.emailAddress}</label>
        <input
          className="form-control"
          aria-describedby="emailHelp"
          id="email-address"
          name="email"
          type="email"
          required
          placeholder={CONTENT.emailAddress}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isSignUp && (
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">{CONTENT.password}</label>
        <input
          className="form-control"
          aria-describedby="emailHelp"
          id="password"
          name="password"
          type="password"
          required
          placeholder={CONTENT.password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
      </div>
      <div>
        <button className="btn btn-primary" onClick={onClick}>
          {buttonText}
        </button>
      </div>{" "}
    </form>
    <p className="text-sm text-center">
      {goToMessage} <Link to={goToRoute}>{goToButtonText}</Link>
    </p>
  </div>
);
export default EmailForm;
