import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "./App.css"
import LeftNavBar from "./components/LeftNavBar"
import ProfileNav from "./components/ProfileNav"
import GoodMorning from "./components/GoodMorning"
import MainHome from "./components/MainHome"

function App() {
  return (
    <div className="App">
      <ProfileNav />
      <GoodMorning />
      <MainHome />
      <LeftNavBar />
    </div>
  )
}

export default App
