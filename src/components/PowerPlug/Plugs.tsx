import React from "react";
import "./Plugs.css"; // keep your CSS in a scoped file

interface PlugsProps {
  isOn: boolean; // control the plug state
  label?: string;
}

const Plugs: React.FC<PlugsProps> = ({ isOn }) => {
  return (
    <div className="plugs-wrapper" data-dark={isOn ? "false" : "true"}>
      <button
        className="plugs"
        type="button"
        aria-pressed={isOn}
        tabIndex={-1}
      >
        <svg
          className="plugs__img"
          viewBox="0 0 70 35"
          width="700px"
          height="350px"
          aria-hidden="true"
        >
        <g fill="none" stroke="currentcolor" strokeLinecap="round" strokeWidth="1">
        <g className="plugs__img-left" transform="translate(13,10)">
          <polyline points="0 0,0 1" />
          <g className="plugs__img-left-seg" transform="translate(0,1)">
            <polyline points="0 0,0 1" />
            <g className="plugs__img-left-seg" transform="translate(0,1)">
              <polyline points="0 0,0 1" />
              <g className="plugs__img-left-seg" transform="translate(0,1)">
                <polyline points="0 0,0 1" />
                <g className="plugs__img-left-seg" transform="translate(0,1)">
                  <polyline points="0 0,0 1" />
                  <g className="plugs__img-left-seg" transform="translate(0,1)">
                    <polyline points="0 0,0 1" />
                    <g className="plugs__img-left-seg" transform="translate(0,1)">
                      <polyline points="0 0,0 1" />
                      <g className="plugs__img-left-seg" transform="translate(0,1)">
                        <polyline points="0 0,0 1" />
                        <g className="plugs__img-left-seg" transform="translate(0,1)">
                          <polyline points="0 0,0 1" />
                          <g className="plugs__img-left-seg" transform="translate(0,1)">
                            <polyline points="0 0,0 1" />
                            <g className="plugs__img-left-seg" transform="translate(0,1)">
                              <polyline points="0 0,0 1" />
                              <g className="plugs__img-left-seg plugs__img-left-seg--flip" transform="translate(0,1)">
                                <polyline points="0 0,0 1" />
                                <g className="plugs__img-left-seg plugs__img-left-seg--flip" transform="translate(0,1)">
                                  <polyline points="0 0,0 1" />
                                  <g className="plugs__img-left-seg plugs__img-left-seg--flip" transform="translate(0,1)">
                                    <polyline points="0 0,0 1" />
                                    <g className="plugs__img-left-seg plugs__img-left-seg--flip" transform="translate(0,1)">
                                      <polyline points="0 0,0 1" />
                                      <g className="plugs__img-left-seg plugs__img-left-seg--flip" transform="translate(0,1)">
                                        <polyline points="0 0,0 1" />
                                        <g className="plugs__img-left-head" transform="translate(-2.5,1)">
                                          <rect rx="1" ry="1" x="0" y="0" width="5" height="6" />
                                          <polyline className="plugs__img-prong" points="1 6,1 8" strokeDasharray="2 2" />
                                          <polyline className="plugs__img-prong" points="4 6,4 8" strokeDasharray="2 2" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g className="plugs__img-right" transform="translate(57,10)">
          <polyline points="0 0,0 1" />
          <g className="plugs__img-right-seg" transform="translate(0,1)">
            <polyline points="0 0,0 1" />
            <g className="plugs__img-right-seg" transform="translate(0,1)">
              <polyline points="0 0,0 1" />
              <g className="plugs__img-right-seg" transform="translate(0,1)">
                <polyline points="0 0,0 1" />
                <g className="plugs__img-right-seg" transform="translate(0,1)">
                  <polyline points="0 0,0 1" />
                  <g className="plugs__img-right-seg" transform="translate(0,1)">
                    <polyline points="0 0,0 1" />
                    <g className="plugs__img-right-seg" transform="translate(0,1)">
                      <polyline points="0 0,0 1" />
                      <g className="plugs__img-right-seg"transform="translate(0,1)">
                        <polyline points="0 0,0 1" />
                        <g className="plugs__img-right-seg" transform="translate(0,1)">
                          <polyline points="0 0,0 1" />
                          <g className="plugs__img-right-seg" transform="translate(0,1)">
                            <polyline points="0 0,0 1" />
                            <g className="plugs__img-right-seg" transform="translate(0,1)">
                              <polyline points="0 0,0 1" />
                              <g className="plugs__img-right-seg plugs__img-right-seg--flip" transform="translate(0,1)">
                                <polyline points="0 0,0 1" />
                                <g className="plugs__img-right-seg plugs__img-right-seg--flip" transform="translate(0,1)">
                                  <polyline points="0 0,0 1" />
                                  <g className="plugs__img-right-seg plugs__img-right-seg--flip" transform="translate(0,1)">
                                    <polyline points="0 0,0 1" />
                                    <g className="plugs__img-right-seg plugs__img-right-seg--flip" transform="translate(0,1)">
                                      <polyline points="0 0,0 1" />
                                      <g className="plugs__img-right-seg plugs__img-right-seg--flip" transform="translate(0,1)">
                                        <polyline points="0 0,0 1" />
                                        <g className="plugs__img-right-head" transform="translate(-2.5,1)">
                                          <rect rx="1" ry="1" x="0" y="0" width="5" height="6" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <g fill="currentcolor" transform="translate(35,10)">
        <g className="plugs__img-spark-1-y">
          <circle className="plugs__img-spark-1-x" r="0" cy="-1" />
        </g>
        <g className="plugs__img-spark-2-y">
          <circle className="plugs__img-spark-2-x" r="0" cy="0" />
        </g>
        <g className="plugs__img-spark-3-y">
          <circle className="plugs__img-spark-3-x" r="0" cy="1" />
        </g>
      </g>
      </svg>
      </button>
    </div>
  );
};

export default Plugs;