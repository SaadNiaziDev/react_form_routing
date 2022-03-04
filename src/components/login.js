import "./style.css";
import SignUp from "./signup"

function Login() {
  const Success = () => {
    return alert("Welcome");
  };

  const signUp = () => {
    return <SignUp/>;
  };
  return (
    <>
      <div className="layer">
        <div className="center">
          <input
            className="input"
            type="text"
            id="email"
            placeholder="Enter your email address"
          />
          <input
            className="input"
            type="password"
            id="passwaord"
            placeholder="Enter your password"
          />
          <button className="button-proceed" onClick={Success}>
            Login
          </button>
          <button className="button-proceed" onClick={signUp}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
