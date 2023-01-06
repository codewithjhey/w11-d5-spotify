import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getPlayMusic } from "../redux/actions"

const DisplayCard = ({ album }) => {
  const dispatch = useDispatch()

  return (
    <Card className="card">
      <div className="play-on-hover">
        <img
          src="PlayOnHover.svg"
          alt=""
          onClick={() => {
            dispatch(getPlayMusic(album.album.id, album.id))
            console.log(album.album.id, album.id)
          }}
        />
      </div>
      <Card.Img variant="top" src={album.album.cover_medium} />
      <Card.Body>
        <h6 className="card-title">{album.album.title}</h6>
        <p className="card-text">{album.artist.name}</p>
        <p className="card-text">{album.title}</p>
      </Card.Body>
    </Card>
  )
}

export default DisplayCard
