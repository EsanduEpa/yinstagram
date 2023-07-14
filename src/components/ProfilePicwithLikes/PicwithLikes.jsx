import React from 'react'
import './picwithLikes.css'

export default function PicwithLikes() {
  return (
    <>

    <div className='propicandname'>
      <div className="propicmain">
      <img src='/images/jonsnow.jpg' className='propic' alt='jonsnow' />
      </div>
      <br></br>
      <div className='propicnamebar' >
      <span className="propicName">Jon Snow</span>
      <br></br>
      <span className="propicName2">@aegon_tagaryan</span>
      </div>
    </div>
    <br />
    <div className="likes">
      <div className="likesblock1">
        <span className="likesno">32K</span>
        <br />
        <span className="likesname">Likes</span>
      </div>
      <div className="likesblock2">
        <span className="likesno">1620</span>
        <br />
        <span className="likesname">Followers</span>
      </div>
      <div className="likesblock3">
        <span className="likesno">120</span>
        <br />
        <span className="likesname">Following</span>
      </div>

      

    </div>

    </>

    
  )
}
