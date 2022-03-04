import "./style.css";

function SignUp() {
  const Success = () => {
    return alert("Welcome");
  };

  const Error = () => {
    return window.confirm("Are  u sure to proceed?");
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
            SignUp
          </button>
          <button className="button-cancel" onClick={Error}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;