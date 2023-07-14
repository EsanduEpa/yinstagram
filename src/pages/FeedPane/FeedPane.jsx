import React from 'react'
import './feedPane.css'
import Stories from '../../components/Stories/Stories'
import Feedtitle from '../../components/Feedtitle/Feedtitle'
import Post from '../../components/Post/Post'

export default function FeedPane() {
  return (
    <div className='feedPane'>
      <Stories />
      <Feedtitle />
      <Post />
    </div>
    
  )
}
