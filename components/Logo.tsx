import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image 
        src='/images/logo_head.png'
        alt="Dry Cleaners"
        width={150}
        height={80} 
      />
    </div>
  )
}

export default Logo