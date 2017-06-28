import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const keep = combineReducers({
	notesReducer: notesReducer,
});

export default keep;