import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext';
import AlertContext from '../../context/AlertContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUser, clearUser } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSearch = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === '') {
      alert('username cannot be empty');
    } else {
      searchUser(text);
      setText('');
    }
  };

  const handleClear = (event) => {
    clearUser();
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                className='w-full pr40 bg-gray-200 input input-lg text-black'
                placeholder='Search username'
                value={text}
                onChange={handleSearch}
              />
              <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
