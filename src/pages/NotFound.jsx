import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-6xl font-bold mb-8'>Oops!</h1>
          <p className='text=xl mb-4'>
            Looks like the page you are trying to load does not exist
          </p>
          <Link to='/' className='btn btn-primary no-animation rounded'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
