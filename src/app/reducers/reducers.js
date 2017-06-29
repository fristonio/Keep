import { combineReducers } from 'redux';
import notesReducer from './notesReducer';

const keep = combineReducers({
	notes: notesReducer
});

export default keep;