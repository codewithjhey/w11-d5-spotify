import { Navbar, Nav } from "react-bootstrap"

const LeftNavBar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="navbar navbar-dark flex-column align-content-start justify-content-start fixed-top"
        id="NavBar"
      >
        <Navbar.Brand href="#home">
          <img
            id="logo"
            className="my-3 justify-content-start"
            src="Spotify logo.png"
            alt="The spotify Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto flex-column">
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img src="Vector.svg" alt="Home symbol" className="ml-0" />
              <p className="my-0 mx-3">Home</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <img
                src="search.svg"
                alt="Search Lens symbol"
                className="nav-icon-size "
              />
              <p className="my-0 mx-2">Search</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected mb-4">
              <img
                src="library.svg"
                alt="Library symbol"
                className="nav-icon-size "
              />
              <p className="my-0 mx-2">Your Library</p>
            </div>
          </Nav.Link>
          <Nav.Link href="#home">
            <div className="d-flex align-items-center navbar-selected">
              <div className="navbar-icon-square  d-flex align-items-center justify-content-center">
                <img src="add.svg" alt="" className="nav-icon-size" />
              </div>
              <p className="my-0 mx-2">Create PlayList</p>
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
              <p className="my-0 mx-2">Liked Songs</p>
            </div>
            <div id="album-to-line"></div>
          </Nav.Link>

          <Nav.Link href="#home">
            <div className="install-container flex-column bg-test navbar-selected">
              <div className="d-flex align-items-center install">
                <img src="download app.svg" alt="Install symbol" />
                <p className="my-0 mx-2">Install App</p>
              </div>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="sidebar-placeholder"></div>
    </div>
  )
}

export default LeftNavBar
