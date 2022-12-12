import { Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getArtistSearch } from "../redux/actions"
import DisplayCard from "./DisplayCard"

const MainHome = () => {
  const dispatch = useDispatch()
  const albumOfArtist = useSelector((state) => state.addArtist.artistArray)

  console.log(albumOfArtist)

  const [albumsArray, setAlbumsArray] = useState([])

  useEffect(() => {
    dispatch(getArtistSearch("wizkid"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAlbumsArray(albumOfArtist)
    console.log("array =", albumsArray)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumOfArtist])

  return (
    <div className="left-space">
      <Row>
        <DisplayCard />
      </Row>
    </div>
  )
}

export default MainHome
