import { Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getArtistSearch } from "../redux/actions/index"

const GetAlbum = ({ artist }) => {
  const artistArray = useSelector((state) => state.addArtist.artistArray)
  const dispatch = useDispatch()

  console.log(artistArray)

  return (
    <div>
      <Col sm={6} md={4} lg={2}>
        {artistArray.includes(artist) ? (
          <Card
            className="card"
            onClick={() => {
              dispatch(getArtistSearch(artist))
            }}
          >
            <div className="play-on-hover">
              <img src="PlayOnHover.svg" alt="" />
            </div>

            <Card.Img variant="top" src={artist.album.cover_medium} />
            <Card.Body>
              <h6 className="card-title">
                {artist.album.title}
                <img src="green-heart.svg" alt="" className="liked" />
              </h6>
              <p className="card-text">{artist.artist.name}</p>
              <p className="card-text">{artist.album.type}</p>
            </Card.Body>
          </Card>
        ) : (
          <Card
            className="card"
            onClick={() => {
              dispatch(getArtistSearch(artist))
            }}
          >
            <div className="play-on-hover">
              <img src="PlayOnHover.svg" alt="" />
            </div>

            <Card.Img variant="top" src={artist.album.cover_medium} />
            <Card.Body>
              <h6 className="card-title">
                {artist.album.title}
                <img src="green-heart.svg" alt="" className="liked" />
              </h6>
              <p className="card-text">{artist.artist.name}</p>
              <p className="card-text">{artist.album.type}</p>
            </Card.Body>
          </Card>
        )}
      </Col>
    </div>
  )
}

export default GetAlbum
