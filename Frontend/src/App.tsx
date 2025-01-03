import './App.css'
import Login from './components/Signin.tsx'
import Landing from './components/Landing.tsx'

function App() {

  return (
    <div className="screen">
      <div className="leftPanel">
        <Landing/>
      </div>
      <div className="rightPanel">
        <Login/>
      </div>
    </div>
  )
}

export default App;