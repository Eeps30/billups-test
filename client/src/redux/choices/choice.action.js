import axios from 'axios';
import { ChoiceTypes } from './choice.types';

export const playerChoiceRock = () => dispatch => {
  axios
    .post('/play', {
      params: {
        player: 2
      }
    })
    .then(response => {
      if (response.data.results === 'win') {
        dispatch({
          type: ChoiceTypes.WIN_ROCK
        });
      } else if (response.data.results === 'lose') {
        dispatch({
          type: ChoiceTypes.LOOSE_ROCK
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_ROCK
        });
      }
    })
    .catch(err => console.error(err));
};

// export const playerChoicePaper = () => ({ type: 'CHOICE_PAPER' });
// export const playerChoiceScissors = () => ({ type: 'CHOICE_SCISSORS' });
// export const playerChoiceSpock = () => ({ type: 'CHOICE_SPOCK' });
// export const playerChoiceLizard = () => ({ type: 'CHOICE_LIZARD' });
