import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ appName }) {
  return (
    <nav className='navbar bg-black'>
      <div className='container mx-auto'>
        <div className='flex-none'>
          <FaGithub className='inline text-3xl pr-2' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {appName}
          </Link>
        </div>
        <div className='flex-1 px-2'>
          <div className='flex justify-end'>
            <NavLink
              to='/'
              activeClassName='btn-active'
              className='px-2 mx-2 btn btn-ghost no-animation hover:font-extrabold focus:font-extrabold focus:text-primary '
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              activeClassName='btn-active'
              className='px-2 mx-2 btn btn-ghost no-animation hover:font-extrabold focus:font-extrabold focus:text-primary'
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  appName: 'Github Profile View',
};

export default Navbar;
