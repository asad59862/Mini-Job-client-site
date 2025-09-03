import React from 'react';
import logo from '../../src/assets/iamge/logoc.png'
import { Link } from 'react-router';
const Logo = () => {
  return (
    <Link to={'/'} >
        <div className='ml-4' >
      <img className='w-12' src={logo} alt="" />
    </div>
    </Link>

  );
};

export default Logo;