import { useState } from 'react';
import { getAuth, signInWithPopup, sendSignInLinkToEmail } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import provider from '../utils/FAuthProvider.tsx';
import googleLogo from '../assets/googleLogo.png';
import gmailLogo from '../assets/gmailLogo.png';
import './Signin.css';
import { app } from '../utils/FAuthApp.tsx';


const actionCodeSettings = {
  url: 'http://localhost:5173', // Ensure this URL is correct
  handleCodeInApp: true,
};
const Signin = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth(app);

  async function OnSignInUsingGMail() {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    console.log("Sending sign-in link to email:", email);

    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            window.localStorage.setItem('emailForSignIn', email);
            alert("Email sent successfully!");
        })
        .catch((e) => {
          alert("Error sending email");
          console.log("Error sending email: " + e.message);
        });
}


  async function OnSigninUsingGoogle() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        // const token = credential.accessToken;
        // const user = result.user;
      }).catch((error) => {
        console.log(error, "Sign in with Google failed");
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <div>
      <div className="loginPanel">
        <div className='loginTitle'>
          <h1>Get Started with <span>Vacuole</span></h1>
        </div>

        <button className='googleLogin' onClick={() => {
          OnSigninUsingGoogle()
        }}>
          <h1 className="loginType">
            Sign In with Google
          </h1>
          <img className='loginLogo' src={googleLogo} />
        </button>

        <hr className='loginRuler' />

        <div className='emailLogin'>
          <input
            className='emailInput'
            type="text"
            placeholder="pinochio@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <button className='emailLoginButton' onClick={() => {
            OnSignInUsingGMail()
          }}>
            <h1 className="loginType">
              Sign In with Gmail
            </h1>
            <img className='loginLogo' src={gmailLogo} />
          </button>
        </div>


      </div>
    </div>
  )
}

export default Signin;

