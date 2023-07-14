import React from 'react'
import './profilePane.css'
import PicwithLikes from '../../components/ProfilePicwithLikes/PicwithLikes'
import IconItems from '../../components/iconItems/IconItems'

export default function ProfilePane() {
  return (
    <div className='profilePane' >
      <PicwithLikes />
      <IconItems />
    </div>
  )
}
