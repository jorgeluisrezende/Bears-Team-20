import { combineReducers } from 'redux';
import login from '../reducers/login';
import profile from '../reducers/profile';
import signup from '../reducers/signup';
import user from '../reducers/user';
import search from '../reducers/search';

// Uses combineReducers to combine all the reducers
const appReducer = combineReducers({
  // Add here the different reducers
  login,
  signup,
  profile,
  user,
  search,
});


const rootReducer = (state, action) => appReducer(state, action);


export default rootReducer;
