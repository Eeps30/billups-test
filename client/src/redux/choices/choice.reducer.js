import { ChoiceTypes } from './choice.types';

const INITIAL_STATE = {
  playerScore: 0,
  computerScore: 0,
  tieGame: false
};

const choiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChoiceTypes.WIN_ROCK:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        tieGame: state.tieGame = false
      };
    case ChoiceTypes.LOSE_ROCK:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        tieGame: state.tieGame = false
      };
    case ChoiceTypes.TIE_ROCK:
      return {
        ...state,
        tieGame: state.tieGame = true
      }
    case ChoiceTypes.WIN_PAPER:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.LOSE_PAPER:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.TIE_PAPER:
        return {
          ...state,
          tieGame: state.tieGame = true
        }
    case ChoiceTypes.WIN_SCISSORS:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.LOSE_SCISSORS:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.TIE_SCISSORS:
        return {
          ...state,
          tieGame: state.tieGame = true
        }
    case ChoiceTypes.WIN_SPOCK:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.LOSE_SPOCK:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.TIE_SPOCK:
        return {
          ...state,
          tieGame: state.tieGame = true
        }
    case ChoiceTypes.WIN_LIZARD:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.LOSE_LIZARD:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        tieGame: state.tieGame = false
      }
    case ChoiceTypes.TIE_LIZARD:
        return {
          ...state,
          tieGame: state.tieGame = true
        }
    case ChoiceTypes.CLEAR_SCOREBOARD:
      return {
        ...state,
        playerScore: 0,
        computerScore: 0,
        tieGame: state.tieGame = false
      }
    default:
      return state;
  }
};

export default choiceReducer;
