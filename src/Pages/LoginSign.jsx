import "./CSS/LoginSign.css";

const LoginSign = () => {
  return (
    <div className="loginsign">
      <div className="loginsign-container">
        <h1> Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" name="" placeholder="Your Name" id="" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsign-login">
          Already have an account <span>Login Here</span>
        </p>
        <div className="loginsign-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree policy and privacy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSign;
