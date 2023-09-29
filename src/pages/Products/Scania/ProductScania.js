import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductScania = () => {
  const navigate = useNavigate()
  return (
    <>
    <main className='product'>
      <h2 className='judul-product'>Scania</h2>
      <div className='gambar-logo'>
        <img src='https://www.carlogos.org/logo/Scania-logo-6200x1800.png'/>
      </div>
      <div className='wrap-product'>
        <div className='card-product'>
          <div className='wrap-img' onClick={()=>navigate('/detailscania')}>
            <img src='https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png' alt='Exca'/>
          </div>
            <h3 className='nama-product'>Dump Truck</h3>
        </div>
        <div className='card-product'>
          <div className='wrap-img' onClick={()=>navigate('/detailscania')}>
            <img src='https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png' alt='Exca'/>
          </div>
            <h3 className='nama-product'>Dump Truck</h3>
        </div>
        <div className='card-product' onClick={()=>navigate('/detailscania')}>
          <div className='wrap-img'>
            <img src='https://products.unitedtractors.com/wp-content/uploads/2021/04/P_410_B8x4HZ-1.png' alt='Exca'/>
          </div>
            <h3 className='nama-product'>Dump Truck</h3>
        </div>
      </div>
    </main>
    </>
  )
}