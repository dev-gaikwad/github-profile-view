import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer footer-center border-box bg-black p-2'>
      <div className='container'>
        <h3>Contact Us</h3>
        <div className='inline'>
          <Link
            to='/'
            className='px-2 mx-2 hover:font-bold hover:text-emerald-400'
          >
            Github
          </Link>
          <Link
            to='/'
            className='px-2 mx-2 hover:font-bold hover:text-blue-400'
          >
            LinkedIn
          </Link>
        </div>
        <div className='flex justify-end'>
          <p>Copyright &copy; {footerYear} . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
