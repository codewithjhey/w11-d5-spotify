import { Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getArtistSearch } from "../redux/actions"
import DisplayCard from "./DisplayCard"
import ArtistCard from "./ArtistCard"

const MainHome = () => {
  const dispatch = useDispatch()
  const albumOfArtist = useSelector((state) => state.addArtist.artistArray)

  const [albumsArray, setAlbumsArray] = useState([])

  useEffect(() => {
    dispatch(getArtistSearch("Rihanna"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAlbumsArray(albumOfArtist)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumOfArtist])

  return (
    <div className="left-space">
      <h2 className="ft">Goosebumps albums</h2>
      <Row>
        {albumsArray.slice(0, 6).map((album) => (
          <DisplayCard album={album} key={album.id} />
        ))}
      </Row>
      <h2 className="ft">Best of artists</h2>
      <Row>
        {albumsArray.slice(0, 12).map((album) => (
          <ArtistCard album={album} key={album.id} />
        ))}
      </Row>
    </div>
  )
}

export default MainHome
