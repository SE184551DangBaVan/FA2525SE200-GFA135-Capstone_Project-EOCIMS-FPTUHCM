import { ArticleOutlined, BallotOutlined, ChairAltOutlined, DvrOutlined, Groups2, Groups2Outlined, KeyboardArrowUp, RecentActorsOutlined, School, SubjectOutlined } from '@mui/icons-material'
import './SideBar.css'
import { useEffect, useRef, useState } from "react"

export default function SideBar() {
  const [sideBarSelected, setSideBarSelected] = useState("staff");
  return (
    <>
      <div id="side-bar-outer" />
      <div id="side-bar-inner-mask" />
      <div id="side-bar">
        <input id="side-bar-toggle" type="checkbox"/>
        <div id="side-bar-header">
          <label htmlFor="side-bar-toggle"><span id="side-bar-toggle-burger"></span></label>
          <hr/>
        </div>
        <div id="side-bar-content">
          <div className={`side-bar-button ${sideBarSelected === 'staff' ? 'staff' : ''}`} onClick={() => setSideBarSelected("staff")}><RecentActorsOutlined className="fas fa-staff"/><span>Staff List</span></div>
          <div className={`side-bar-button ${sideBarSelected === 'subject' ? 'subject' : ''}`} onClick={() => setSideBarSelected("subject")}><SubjectOutlined className="fas fa-subject"/><span>Subject List</span></div>
          <div className={`side-bar-button ${sideBarSelected === 'semester' ? 'semester' : ''}`} onClick={() => setSideBarSelected("semester")}><BallotOutlined className="fas fa-semester"/><span>Semesters List</span></div>
          <hr/>
          <div className={`side-bar-button ${sideBarSelected === 'room' ? 'room' : ''}`} onClick={() => setSideBarSelected("room")}><ChairAltOutlined className="fas fa-room"/><span>Room List</span></div>
          <div className={`side-bar-button ${sideBarSelected === 'student' ? 'student' : ''}`} onClick={() => setSideBarSelected("student")}><Groups2 className="fas fa-student"/><span>Student List</span></div>
          <div className={`side-bar-button ${sideBarSelected === 'exam' ? 'exam' : ''}`} onClick={() => setSideBarSelected("exam")}><School className="fas fa-exam"/><span>Exam List</span></div>
          <div className={`side-bar-button ${sideBarSelected === 'exam-room' ? 'exam-room' : ''}`} onClick={() => setSideBarSelected("exam-room")}><ArticleOutlined className="fas fa-exam-room"/><span>Exam Room List</span></div>
          <hr/>
          <div className={`side-bar-button ${sideBarSelected === 'template' ? 'template' : ''}`} onClick={() => setSideBarSelected("template")}><DvrOutlined className="fas fa-template"/><span>Session Template</span></div>
          <div id="side-bar-content-highlight">
            <div id="mech">
              <div id="gearwheel-a"></div>
              <div id="gearwheel-b"></div>
            </div>
          </div>
        </div>
        <input id="side-bar-footer-toggle" type="checkbox"/>
        <div id="side-bar-footer">
          <div id="side-bar-footer-heading">
            <div id="side-bar-footer-avatar"><img src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"/></div>
            <div id="side-bar-footer-titlebox"><a id="side-bar-footer-title" href="" target="_blank">Jonh A. </a><span id="side-bar-footer-subtitle">Admin</span></div>
            <label htmlFor="side-bar-footer-toggle">
              <div className="dial volume-button" style={{"--value": "0deg"}}>
                    <div className="data-container">
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                      <div className="data">#</div>
                    </div>
                    <div className="dial-core"></div>
                    <div className="selector"></div>
                  </div>
            </label>
          </div>
          <div id="side-bar-footer-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </>
  )
}
