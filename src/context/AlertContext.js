import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialstate = null;

  const [state, dispatch] = useReducer(AlertReducer, initialstate);
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        msg,
        type,
      },
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 5000);
  };
  return <AlertProvider value={{ state, setAlert }}>{children}</AlertProvider>;
};

export default AlertContext;
