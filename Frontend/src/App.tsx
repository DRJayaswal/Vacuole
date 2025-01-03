import './App.css'
import { useEffect } from 'react';
import Signin from './components/Signin.tsx'
import Landing from './components/Landing.tsx'
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { RecoilRoot, useRecoilState } from 'recoil'
import { userAtom } from './session/user.ts';
import { app } from './utils/FAuthApp.tsx';

function App() {  
  return <RecoilRoot>
    <SigninComponent/>
  </RecoilRoot>
}





const SigninComponent = () => {
const auth = getAuth(app);
const [user, setUser] = useRecoilState(userAtom);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.email) {
      setUser({
        loading: false, user: {
          email: user.email
        }
      });
    } else {
      setUser({ loading: false });
    }
  });
}, []);

if(user.loading){
  return <div>Loading...</div>
}
if(!user.user){
  return (
    <div className="screen">
      <div className="leftPanel">
        <Landing/>
      </div>
      <div className="rightPanel">
        <Signin/>
      </div>
    </div>
  )
}
return (
  <div>
    <h1>Welcome {user.user?.email}</h1>
  </div>
)

}


export default App;