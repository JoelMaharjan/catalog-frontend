import React from 'react'
import ccLogo from '../assets/images/cc-logo.png'
import { ArrowUpward } from '@mui/icons-material'

function Copyright() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div className='copyright'>
      <div className='copyright-wrapper'>
        <p>Terms and Conditions</p>
        <img src={ccLogo} alt="copyright-logo" />
      </div>
      <button className='arrow-up' onClick={scrollToTop}>
        <ArrowUpward style={{fontSize:18, color:"#7C7D82"}} />
      </button>
      
    </div>
  )
}

export default Copyright
