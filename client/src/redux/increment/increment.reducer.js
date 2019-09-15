import { INCREMENT_NUM } from './increment.action';

const INITIAL_STATE = {
  num: 0
};

const incrementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_NUM:
      return {
        ...state,
        num: state.num + 1
      }
    default: return state
  }
}

export default incrementReducer;