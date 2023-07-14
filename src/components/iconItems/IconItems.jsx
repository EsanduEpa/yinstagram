import React from 'react'
import './iconItems.css'
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function IconItems() {
  return (
    <>
    <div className="container1">
    <div className='IconContainer'>
      <li className="iconItems">
        <FeedIcon className='icon' />
        <span className="iconname">Feed</span>
      </li>
      <li className="iconItems">
        <SearchIcon className='icon' />
        <span className="iconname">Explore</span>
      </li>
      <li className="iconItems">
        <NotificationsNoneIcon className='icon' />
        <span className="iconname">Noticification</span>
      </li>
      <li className="iconItems">
        <EmailIcon className='icon' />
        <span className="iconname">Messages</span>
      </li>
      <li className="iconItems">
        <SendIcon className='icon' />
        <span className="iconname">Direct</span>
      </li>
      <li className="iconItems">
        <LeaderboardIcon className='icon' />
        <span className="iconname">Stats</span>
      </li>
      <li className="iconItems">
        <SettingsIcon className='icon' />
        <span className="iconname">Settings</span>
      </li>
      
    </div>
    </div>

    <hr className='logoutline' />
<div className='container1'>
    <div className='IconContainer'>
    <li className="iconItems" id='logout'>
        <LogoutIcon className='icon' />
        <span className="iconname">Logout</span>
      </li>
    </div>
    </div>
    </>
  )
}
