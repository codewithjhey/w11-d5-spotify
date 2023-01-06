import { Card, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getPlayMusic } from "../redux/actions"

const ArtistCard = ({ album }) => {
  const dispatch = useDispatch()

  return (
    <>
      <Col sm={6} md={4} lg={2}>
        <Card
          className="card"
          onClick={() => {
            dispatch(getPlayMusic(album))
          }}
        >
          <div className="play-on-hover">
            <img src="PlayOnHover.svg" alt="" />
          </div>
          <Card.Img
            variant="top"
            src={album.artist.picture_medium}
            className="artist-image-cover"
          />
          <Card.Body>
            <h6 className="card-title">{album.artist.name}</h6>
            <p className="card-text">{album.artist.type}</p>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ArtistCard
