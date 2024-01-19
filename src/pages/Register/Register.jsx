import "./register.css";
import image from "../../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        });
      });
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register__form">
      <div className="register__form-wrapper">
        <h1 className="register__form-logo">ChatBox</h1>
        <h2 className="register__form-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter  name"
            className="register__form-input"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="register__form-input"
          />
          <input
            type="password"
            placeholder="Enter  password"
            className="register__form-input"
          />
          <label htmlFor="file" className="register__form-file_input">
            <img src={image} alt="avatar input" />
            <p>Add an avatar</p>
          </label>
          <input type="file" className="register__form-input" id="file" />
          <button className="register__form-btn">Sign Up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p className="register__form-text">
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
