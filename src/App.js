import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"
import "./App.css"
import LeftNavBar from "./components/LeftNavBar"
import ProfileNav from "./components/ProfileNav"
import GoodMorning from "./components/GoodMorning"
import MainHome from "./components/MainHome"
import ThePlayer from "./components/ThePlayer"

function App() {
  return (
    <div className="App">
      <LeftNavBar />
      <ProfileNav />
      <GoodMorning />
      <MainHome />
      <ThePlayer />
    </div>
  )
}

export default App
