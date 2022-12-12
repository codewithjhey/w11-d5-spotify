import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Container } from "react-bootstrap"

const ThePlayer = () => {
  const song = useSelector((state) => state.playMusic.musicOnLoad)
  const [track, setTrack] = useState({
    title: "",
    album: { title: "" },
    duration: null
  })

  useEffect(() => {
    setTrack(song)
  }, [song])

  return (
    <Container>
      <div className="bottom-container d-flex">
        <div className="playing d-flex">
          <div className="playing-image">
            <img src="playing.png" alt="" />
          </div>
          <div className="playing-title">
            <div>{track.title}</div>
            <div>{track.album.title}</div>
          </div>
          <div>
            <img src="green-heart.svg" alt="" />
          </div>
        </div>

        <div className="player d-flex flex-column justify-content-center">
          <div className="player-icons d-flex align-items-center">
            <div>
              <img src="shurffle.svg" alt="" />
            </div>
            <div>
              <img src="prev.svg" alt="" />
            </div>
            <div>
              <img src="play.svg" alt="" />
            </div>
            <div>
              <img src="next.svg" alt="" />
            </div>
            <div>
              <img src="playall.svg" alt="" />
            </div>
          </div>
          <div className="player-bar d-flex">
            <span>1:45</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            {(track.duration - (track.duration %= 60)) / 60 +
              (9 < track.duration ? ":" : ":0") +
              track.duration}
          </div>
        </div>

        <div className="other-functions d-flex">
          <div className="player-icons d-flex align-items-center justify-content-a">
            <div>
              <img src="mic.svg" alt="" />
            </div>
            <div>
              <img src="playlist.svg" alt="" />
            </div>
            <div className="volume d-flex align-items-center">
              <img src="volume.svg" alt="" />
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ThePlayer
