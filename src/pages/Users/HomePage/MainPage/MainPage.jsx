import ScissorLift from '../../../../components/ExtensionJoint/ScissorLift'
import SideBar from '../../../../components/SideBar/SideBar'
import './MainPage.css'
import { useEffect, useRef, useState } from "react"

export default function MainPage() {
  const [selectedContent, setSelectedContent] = useState("staff");
  return (
    <div className='main-home-page'>
      {/* <div className='extended-joint-container'>
        <ScissorLift />
      </div> */}
      <SideBar />
      <div className='main-home-page-content-container'>
        
      </div>
    </div>
  )
}
