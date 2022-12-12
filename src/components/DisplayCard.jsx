import { Card, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

const DisplayCard = () => {
  const albumOfArtist = useSelector((state) => state.addArtist.artistArray)
  console.log(albumOfArtist)

  return (
    <div>
      <h3>Best of Wizkid </h3>
      <Row>
        {albumOfArtist.slice(0, 6).map((c) => (
          <Col className="col-sm-6 col-md-4 col-lg-2 col-xl-2">
            <Card className="card">
              <div className="play-on-hover">
                <img src="PlayOnHover.svg" alt="" />
              </div>
              <Card.Img variant="top" src={c.album.cover_medium} />
              <Card.Body>
                <h6 className="card-title">{c.album.title}</h6>
                <p className="card-text">{c.artist.name}</p>
                <p className="card-tex4t">{c.album.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default DisplayCard
