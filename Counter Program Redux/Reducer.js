const initialState = { count: 0 }; //this is the initial state of the counter

const counterReducer = (state = initialState, action) => { 
    //counterReducer takes in the current state and an action, and returns the new state
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }; // return a new state with the count is incremented by 1
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }; // return a new state with the count is decremented by 1
    default:
      return state; // if there is unknown action it returns the unchanged state
  }
};

export default counterReducer;
