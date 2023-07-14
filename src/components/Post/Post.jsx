import React from 'react'
import './post.css'
import Postbox from '../PostBox/Postbox'



export default function Post() {
  return (
    <div>

      <div className="container">        
        <div className="item"><Postbox name="Jon Snow" link="/images/jonsnow.jpg" likes="100K" cmnts="22K" /></div>
        <div className="item"><Postbox name="Danarys Tagaryan" link="/images/danerys.jpg" likes="99K" cmnts="17K" /></div>
        <div className="item"><Postbox name="Rob Stark" link="/images/rob.jpg" likes="30K" cmnts="2K" /></div>
        <div className="item"><Postbox name="Sansa Stark" link="/images/sansa.jpg" likes="100K" cmnts="18K" /></div>
        <div className="item"><Postbox name="Tyrian Lannister" link="/images/tyrion.jpg" likes="40K" cmnts="9K" /></div>
        <div className="item"><Postbox name="R.R. Martin" link="/images/rrmartin.jpg" likes="20K" cmnts="1K" /></div>
        <div className="item"><Postbox name="Drogon" link="/images/drogon.jpg" likes="66K" cmnts="15K" /></div>
        <div className="item"><Postbox name="Jamie Lannister" link="/images/jamie.jpg" likes="35K" cmnts="6K" /></div>
        <div className="item"><Postbox name="Tywin Lannister" link="/images/tywin.jpg" likes="34K" cmnts="7K" /></div>
          
        
        
        
      </div>

      
    </div>
  )
}
