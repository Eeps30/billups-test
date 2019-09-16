import { ChoiceTypes } from './choice.types';

const INITIAL_STATE = {
  playerScore: 0,
  computerScore: 0
};

const choiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChoiceTypes.WIN_ROCK:
      return {
        ...state,
        playerScore: state.playerScore + 1
      };
    case ChoiceTypes.LOSE_ROCK:
      return {
        ...state,
        computerScore: state.computerScore + 1
      };
    case ChoiceTypes.TIE_ROCK:
      return state;
    case ChoiceTypes.WIN_PAPER:
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    case ChoiceTypes.LOSE_PAPER:
      return {
        ...state,
        computerScore: state.computerScore + 1
      }
    case ChoiceTypes.TIE_PAPER:
      return state;
    default:
      return state;
  }
};

export default choiceReducer;
