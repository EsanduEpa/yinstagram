import React from 'react'
import "./Home.css"
import NavBar from '../../components/NavigationBar/navBar'
import FeedPane from '../FeedPane/FeedPane'
import ProfilePane from '../ProfilePane/ProfilePane'

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="feedandprofilepane">
        <ProfilePane />
        <FeedPane />
      </div>
      
    </div>
  )
}
