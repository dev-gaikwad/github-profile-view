const AlertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.state;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default AlertReducer;
