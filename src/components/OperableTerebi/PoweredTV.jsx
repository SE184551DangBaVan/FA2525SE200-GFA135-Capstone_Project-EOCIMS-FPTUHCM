import './PoweredTV.css'

export default function PoweredTV({ powered }) {
  return (
    <div className="poweredTV">
      {/* <div className="television-container">
        <div className="outer-tv">
          <div className="tv">
            <div className="tv-container">
              <div className="screen-container">
                <div className="outer-screen">
                  <div className="glow"></div>
                  {powered ? (
                    <div className="screen">
                      <div className="shine"></div>
                    </div>
                    ) : (
                      <div className="broadcast">
                        <div className="video-overlay"></div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="tv-right">
                <div className="buttons">
                  <div className="knob">
                    <div className="dial"></div>
                  </div>
                  <div className="knob rotate">
                    <div className="dial"></div>
                  </div>
                </div>
                <ul className="lines">
                  <li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {powered ? (
        <div className="screen">
          <div className="shine"></div>
        </div>
      ) : (
        <div className="broadcast">
          <div className="video-overlay"></div>
        </div>
      )
      }
    </div>
  )
}
