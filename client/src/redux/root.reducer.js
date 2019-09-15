import { combineReducers } from 'redux';
import incrementReducer from './increment/increment.reducer';
import choiceReducer from './choices/choice.reducer';

const rootReducer = combineReducers({
  increment: incrementReducer,
  choice: choiceReducer
});

export default rootReducer;

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT_NUM":
//       let newNum = state.num + 1
//       return {
//         ...state,
//         num: newNum
//       }
//     case "PLAYER_CHOICE_ROCK":
//       axios.post('/play', {
//         params: {
//           player: 2
//         }
//       })
//         .then((response) => {
//           console.log(state);
//           if (response.data.results === "win") {
//             let newPlayerScore = state.playerScore + 1
//             return {
//               ...state,
//               playerScore: newPlayerScore
//             }
//           } else if (response.data.results === "tie") {
//             return {
//               ...state,
//             }
//           } else {
//             let newComputerScore = state.computerScore + 1
//             return {
//               ...state,
//               playerScore: newComputerScore
//             }
//           }
//         })
//       return {
//         ...state
//       }
//     case "PLAYER_CHOICE_PAPER":
//       axios.post('/play', {
//         params: {
//           player: 3
//         }
//       })
//         .then((response) => {
//           console.log(response);
//         })
//       return {
//         ...state
//       }
//     case "PLAYER_CHOICE_SCISSORS":
//       axios.post('/play', {
//         params: {
//           player: 4
//         }
//       })
//         .then((response) => {
//           console.log(response);
//         })
//       return {
//         ...state
//       }
//     case "PLAYER_CHOICE_LIZARD":
//       axios.post('/play', {
//         params: {
//           player: 5
//         }
//       })
//         .then((response) => {
//           console.log(response);
//         })
//       return {
//         ...state
//       }
//     case "PLAYER_CHOICE_SPOCK":
//       axios.post('/play', {
//         params: {
//           player: 6
//         }
//       })
//         .then((response) => {
//           console.log(response);
//         })
//       return {
//         ...state
//       }
//     case "CLEAR_SCORE_BOARD":
//       return {
//         ...state,
//         scoreBoard: []
//       }
//     default:
//       return state
//   }
// }

// export default rootReducer;
