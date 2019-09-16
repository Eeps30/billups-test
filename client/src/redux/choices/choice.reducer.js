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
    case ChoiceTypes.WIN_SCISSORS:
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    case ChoiceTypes.LOSE_SCISSORS:
      return {
        ...state,
        computerScore: state.computerScore + 1
      }
    case ChoiceTypes.TIE_SCISSORS:
      return state;
    case ChoiceTypes.WIN_SPOCK:
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    case ChoiceTypes.LOSE_SPOCK:
      return {
        ...state,
        computerScore: state.computerScore + 1
      }
    case ChoiceTypes.TIE_SPOCK:
      return state;
    case ChoiceTypes.WIN_LIZARD:
      return {
        ...state,
        playerScore: state.playerScore + 1
      }
    case ChoiceTypes.LOSE_LIZARD:
      return {
        ...state,
        computerScore: state.computerScore + 1
      }
    case ChoiceTypes.TIE_LIZARD:
      return state;
    default:
      return state;
  }
};

export default choiceReducer;
