import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './navBar.css';

export default function NavBar() {
  return (
    <div>
      <div className="navBaritems">
        <div className="navBarleft">
            <div className="titleBar">
                <InstagramIcon className='titleLogo'/>
                <span className='title'>yinstagram</span>
            </div>
        </div>
        <div className="navBarcenter">
            <div className="searchBar">
                <SearchIcon className='titleLogo'/>
                <input type='text' placeholder='Search for your friends' className='search'/>
            </div>
            
        </div>
        <div className="navBarright">
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <NotificationsActiveIcon/>
                    {/*<span className='navBarIconSpan'> 3 </span>*/}
                    
                </div>
                <div className="navBarIcon">
                    <MailOutlineIcon/>
                    {/* <span className='navBarIconSpan'> 5 </span>*/}

                </div>
                <div>
                    <button className="navBarIcon" id='addPhotoButton'>Add Photo</button>
                    </div>

            </div>
        </div>
      </div>
    </div>
  )
}
