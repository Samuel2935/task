

const reducer = (task =[], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...task, action.payload];
    default:
        return task;
      
  }
};
export default reducer;