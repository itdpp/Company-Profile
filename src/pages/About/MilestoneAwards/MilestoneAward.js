import React from 'react'
import Herosection from '../../../components/Fragments/Herosection'

const MilestoneAward = () => {
    const title = 'Milestone & Award'
  return (
    <>
   <Herosection content={title}/>
    <div className='my-20 px-6 '>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/New-Milestone-Uniquip-min-2048x1448.jpg'/>
    </div>
    <div className='px-6 mb-24 -mt-8'>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/02/Awards-2-1-1024x724.jpg'/>
    </div>
    </>
  )
}

export default MilestoneAward

