import {createSlice} from '@reduxjs/toolkit';
//for creating particular state object

export const userSlice = createSlice({
    //createSlice's inputs
    name : 'user',
    initialState :{value : {name: '',age: 0,
    email:''}}, //reducers initial state

    //reducer is an object and inside that we are passing the list of the actions
    //list of actions -> when user interacts, the state value changes that is list of actions
    //when we click login button, we are passing the login button and change the state values that is actions
    reducers : {
        login: (state, action) => {
            //state is the current state
            //action is the change that should be made to the state

            state.value=action.payload //contains the data necessary to update the state
            //here reducer is updating the (value) property of state object with the value provided in the (payload) property of the action object.
        }
    }
})

export default userSlice.reducer; 
//allows other parts of your application access to this reducer, allowing them to include it in the overall state management