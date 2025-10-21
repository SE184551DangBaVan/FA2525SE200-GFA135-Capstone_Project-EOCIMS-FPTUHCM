import SideBar from '../../../../components/SideBar/SideBar'
import './MainPage.css'
import { useEffect, useRef, useState } from "react"

export default function MainPage() {
  const [selectedContent, setSelectedContent] = useState("staff");
  return (
    <div className='main-home-page'>
      <SideBar />
      <div className='main-home-page-content-container'>
        
      </div>
    </div>
  )
}
