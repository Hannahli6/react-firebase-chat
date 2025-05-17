import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";


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
  };

  //async function for a database request
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      //pass in the auth method from firebase config file
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Upload the image to Firebase Storage
      const imgUrl = await upload(avatar.file);

      // Add a new document called users with the user id
      await setDoc(doc(db, "users", response.user.uid), {
        username: username,
        email: email,
        avatar: imgUrl,
        id: response.user.uid, //when we search for our users, it will be easier to use the user id
      });

      // Add a new document called userChats with empty chat array associated with the user id 
      await setDoc(doc(db, "userChats", response.user.uid), {
        chats:[],
      });
      toast.success("Account Created! You can login now!");

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
          <h2>create an account ˙ 🍰 .˙—</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="file">
              <img
                className="pixel-corners"
                src={avatar.url || "./avatar.png"}
                alt="avatar"
              />
              Upload an Image
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" name="username" />
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
