import React from 'react'
import GambarAbout from "../../../assets/About/gambar.jpg"
import Herosection from '../../../components/Fragments/Herosection'

const AboutValues = () => {
  const title = 'Values'
  return (
    <>
    <Herosection content={title}/>

      <div className='text-center my-20 mx-8'>
        <img className='items-center' src='https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png'></img>
        <p className='font-bold text-lg'>S.M.A.R.T</p>
        <h4 className='font-semibold text-sm'>Satisfaction - Morale - Adaptability - Responsibility - Teamwork</h4>
      </div>
    <div className='mx-6'>
    <div className='mb-6'>
      <h2 className='font-medium text-xl'>UNITY</h2>
      <p>Understanding the working mechanism, structure, and culture of the organization as well as the political, social, and economic climate in which the organization operates.</p>
    </div>
    <div className='mb-6'>
    <h2 className='font-medium text-xl'>RESPONSIBILITY</h2>
      <p>The ability to work effectively and efficiently to achieve goals (results) and better/ exceeding standards.</p>
    </div>
    <div className='mb-24'>
    <h2 className='font-medium text-xl'>ENTHUSIASM</h2>
      <p>The desire to help or serve others (customers) in accordance with the needs of external and internal customers.</p>
    </div>
    </div>
    </>
  )
}

export default AboutValues