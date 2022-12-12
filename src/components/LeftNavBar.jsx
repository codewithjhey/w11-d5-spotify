import { Navbar, Nav } from "react-bootstrap"

const LeftNavBar = () => {
  return (
    <div className="Left-Nav" id="NavBar">
      <Navbar
        expand="lg"
        className="navbar navbar-dark flex-column align-content-start justify-content-start "
      >
        <div className="logo-container">
          <img
            id="logo"
            className="ml-2 my-3"
            src="Green.svg"
            alt="The spotify Logo"
          />
        </div>
        <div className="mr-auto flex-column">
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="Vector.svg"
                alt="Home symbol"
                className="nav-icon-size"
              />
              <p className="my-0 mx-3">Home</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="search.svg"
                alt="Search Lens symbol"
                className="nav-icon-size"
              />
              <p className="my-0 mx-3">Search</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected mb-4">
              <img
                src="library.svg"
                alt="Library symbol"
                className="nav-icon-size"
              />
              <p className="my-0 mx-3">Your Library</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <div className="navbar-icon-square  d-flex align-items-center justify-content-center">
                <img src="add.svg" alt="" className="nav-icon-size" />
              </div>
              <p className="my-0 mx-3">Create PlayList</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected mb-3">
              <div
                id="navbar-liked-songs"
                className="navbar-icon-square d-flex align-items-center justify-content-center"
              >
                <img src="favorite.svg" alt="" className="nav-icon-size" />
              </div>
              <p className="my-0 mx-3">Liked Songs</p>
            </div>
            <div id="album-to-line"></div>
          </Nav.Link>

          <Nav.Link href="#home">
            <div className="install-container flex-column bg-test navbar-selected">
              <div className="d-flex align-items-center install">
                <img src="download app.svg" alt="Install symbol" />
                <p className="my-0 mx-3">Install App</p>
              </div>
            </div>
          </Nav.Link>
        </div>
      </Navbar>
    </div>
  )
}

export default LeftNavBar
