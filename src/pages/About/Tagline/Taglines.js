import React from 'react'
import GambarAbout from "../../../assets/About/gambar.jpg"

const Taglines = () => {
  return (
<>
    <div className='container'>
      <img className='image' src={GambarAbout} alt='Gambar'/>
      <h1 className='text'>TAGLINE</h1>
    </div>
    <div className='content-t'>
      <div className='kol'>
      <img src='https://www.uniquip.co.id/wp-content/uploads/2023/01/LOGO-PROVEN-PRODUCTS-PROVEN-SERVICES.png' />
      </div>
      <div className='kol'>
        <p><strong >PROVEN PRODUCTS & PROVEN SERVICES</strong> is the United Equipment Indonesia’s tagline in the form of a commitment to all partners and stakeholders as a provider of equipment and services that are suitable for our customers’ needs, for sustainable collaboration towards success.</p>
      </div>
    </div>
    </>
  )
}

export default Taglines