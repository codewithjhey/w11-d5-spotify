import { Nav, Form, FormControl } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getArtistSearch } from "../redux/actions"

const ProfileNav = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    if (query.length >= 0) {
      dispatch(getArtistSearch(query))
    } else {
      dispatch(getArtistSearch("wizkid"))
    }
    e.preventDefault()
  }

  // useEffect(() => {
  //   if (query.length >= 0) {
  //     dispatch(getArtistSearch(query))
  //   } else {
  //     dispatch(getArtistSearch("wizkid"))
  //   }
  // }, [])
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
                <img src="back.svg" alt="Nav back" />
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link forward-icon" href="#">
                <img src="forward gray.svg" alt="Nav forward" />
              </a>
            </li>
          </ul>

          <Form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <FormControl
              id="search-form"
              type="text"
              placeholder="Search"
              className="ml-2"
              onChange={handleChange}
            />
          </Form>
        </div>
        <div id="profile-avatar" className="form-inline my-2 my-lg-0">
          <div id="profile-image">
            <img src="profile.png" alt="user" />
          </div>
          <div id="profile-name">Angel</div>
          <div id="profile-icon">
            <img src="drop-down.svg" alt="" />
          </div>
        </div>
      </div>
    </Nav>
  )
}

export default ProfileNav
