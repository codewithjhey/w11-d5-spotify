import { Row, Col } from "react-bootstrap"

const GoodMorning = () => {
  return (
    <div className="left-space ">
      <h2 className="ft">Good Morning</h2>
      <Row>
        <Col className="top col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div className="top-cards d-flex">
            <div className="top-card-image-icon">
              <img src="heart.svg" alt="" />
            </div>
            <div className="top-card-title">
              <h6>Liked Songs</h6>
            </div>
          </div>
        </Col>
        <Col className="top col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="1.png" alt="" />
            </div>
            <div className="top-card-title">
              <h6>Recent Playlist</h6>
            </div>
          </div>
        </Col>
        <Col className="top col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="2.png" alt="" />
            </div>
            <div className="top-card-title">
              <h6> Gym Mix</h6>
            </div>
          </div>
        </Col>
        <Col className=" top col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <div className="top-cards d-flex">
            <div className="top-card-image">
              <img src="4.png" alt="" />
            </div>
            <div className="top-card-title">
              <h6> Dance Mix</h6>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default GoodMorning
