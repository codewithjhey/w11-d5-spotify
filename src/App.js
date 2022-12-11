import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "./App.css"
import LeftNavBar from "./components/LeftNavBar"
import ProfileNav from "./components/ProfileNav"

function App() {
  return (
    <div className="App">
      <ProfileNav />
      <LeftNavBar />
    </div>
  )
}

export default App
