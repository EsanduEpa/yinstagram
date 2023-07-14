import React from 'react'
import './postbox.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function Postbox(props) {
  return (
    <div>
      <div className="gridpost">
        
        <div className="postImg">
        <img src={props.link}  className="postImage" />
        </div>

        <div className="postownernameandlike">

        <div className="picandname">
          <img src={props.link}  className="postImage2" />
          <span className="postImage2name">{props.name}</span>
        </div>

        <div className="likesandcomment">
          <FavoriteBorderOutlinedIcon />
          <span className="likecount">{props.likes}</span>
          <ChatBubbleOutlineOutlinedIcon  />
          <span className="commentcount">{props.cmnts}</span>

        </div>

      </div>
      </div>
    </div>
  )
}
