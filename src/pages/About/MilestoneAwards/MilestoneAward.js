import React from 'react'
import GambarAbout from "../../../assets/About/gambar.jpg"

const MilestoneAward = () => {
  return (
    <>
    <div className='container'>
      <img className='image' src={GambarAbout} alt='Gambar'/>
      <h1 className='text'>Milestone & Award</h1>
    </div>
    <div className='milestone'>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/New-Milestone-Uniquip-min-2048x1448.jpg'/>
    </div>
    <div className='award'>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/Awards-2-1-1024x724.jpg'/>
    </div>
    </>
  )
}

export default MilestoneAward

