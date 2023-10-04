import React from 'react'
import GambarAbout from "../../../assets/About/gambar.jpg"

const AboutValues = () => {
  return (
    <>
    <div className='container'>
      <img className='image' src={GambarAbout} alt='Gambar'/>
      <h1 className='text'>VALUES</h1>
    </div> 

      <div className='imgv'>
        <img src='https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png'></img>
        <p>S.M.A.R.T</p>
        <h4>Satisfaction - Morale - Adaptability - Responsibility - Teamwork</h4>
      </div>
    <div className='content'>
    <div className='rowv'>
      <h2>UNITY</h2>
      <p>Understanding the working mechanism, structure, and culture of the organization as well as the political, social, and economic climate in which the organization operates.</p>
    </div>
    <div className='rowv'>
    <h2>RESPONSIBILITY</h2>
      <p>The ability to work effectively and efficiently to achieve goals (results) and better/ exceeding standards.</p>
    </div>
    <div className='rowv'>
    <h2>ENTHUSIASM</h2>
      <p>The desire to help or serve others (customers) in accordance with the needs of external and internal customers.</p>
    </div>
    </div>
    </>
  )
}

export default AboutValues