import { combineReducers } from 'redux';
import choiceReducer from './choices/choice.reducer';

const rootReducer = combineReducers({
  choice: choiceReducer
});

export default rootReducer;