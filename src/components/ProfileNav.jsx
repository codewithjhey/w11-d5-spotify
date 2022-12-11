import { Nav, Form, FormControl } from "react-bootstrap"

const ProfileNav = () => {
  return (
    <Nav
      id="profile-top-navbar"
      className="navbar navbar-expand-lg navbar-light flex-grow-1"
    >
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarTogglerDemo02"
      >
        <div className="d-flex">
          <ul className="navbar-nav back-forward-icon mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link back-icon" href="#">
                <img src="./icons/back.svg" alt="" />
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link forward-icon" href="#">
                <img src="./icons/forward gray.svg" alt="" />
              </a>
            </li>
          </ul>

          <Form id="search-form" className="form-inline my-2 my-lg-0 hide">
            <FormControl
              className="query-search mr-sm-2"
              type="text"
              placeholder="Search Music"
              aria-label="Search"
            />
          </Form>
        </div>
        <div id="profile-avatar" className="form-inline my-2 my-lg-0">
          <div id="profile-image">
            <img src="./icons/profile.png" alt="" />
          </div>
          <div id="profile-name">Angel</div>
          <div id="profile-icon">
            <img src="./icons/drop-down.svg" alt="" />
          </div>
        </div>
      </div>
    </Nav>
  )
}

export default ProfileNav
