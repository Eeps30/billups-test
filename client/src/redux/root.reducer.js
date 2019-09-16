import { combineReducers } from 'redux';
import incrementReducer from './increment/increment.reducer';
import choiceReducer from './choices/choice.reducer';

const rootReducer = combineReducers({
  increment: incrementReducer,
  choice: choiceReducer
});

export default rootReducer;