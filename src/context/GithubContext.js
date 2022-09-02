import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const github_search_url = 'https://api.github.com/search/users?q=';

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  async function getUserInfo(url) {
    setLoading();
    const response = await fetch(url);
    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  }

  const searchUser = (username) => {
    const searchQuery = github_search_url + username;
    getUserInfo(searchQuery);
  };

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  function setLoading() {
    dispatch({
      type: 'SET_LOADING',
    });
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
