import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar({
        file: file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    // toast.success("Signed in successfully")
  }

  return (
    <div className="login">
      <h1> ⋆☾⋆⁺₊✧ Pixel Chat Room ✩♬ ₊˚.🎧 </h1>
      <div className="login-form-wrapper">
        {/* login */}
        <div className="item">
          <h2>Welcome back, 🍵⋆｡°🍡°⋆. ࿔*:･</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
          </form>
        </div>
        {/* sign up */}
        <div className="separator"></div>
        <div className="item">
          <h2>create an account ˙  🍰 .˙—</h2>
          <form>
            <label htmlFor="file">
              <img className="pixel-corners" src={avatar.url || "./avatar.png"} alt="avatar" />
              Upload an Image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
