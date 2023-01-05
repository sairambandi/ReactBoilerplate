import { combineReducers } from 'redux';
import home from './home';
import category from './category';

const reduxState = combineReducers({
	home,
	category
});

export default reduxState;
