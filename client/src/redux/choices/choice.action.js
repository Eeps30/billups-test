import axios from 'axios';
import { ChoiceTypes } from './choice.types';

const playerChoiceRock = () => dispatch => {
  console.log('chose rock')
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
          type: ChoiceTypes.LOSE_ROCK
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_ROCK
        });
      }
    })
    .catch(err => console.error(err));
};

const playerChoicePaper = () => dispatch => {
  console.log('chose paper')
  axios
    .post('/play', {
      params: {
        player: 3
      }
    })
    .then(response => {
      if (response.data.results === 'win') {
        dispatch({
          type: ChoiceTypes.WIN_PAPER
        });
      } else if (response.data.results === 'lose') {
        dispatch({
          type: ChoiceTypes.LOSE_PAPER
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_PAPER
        });
      }
    })
    .catch(err => console.error(err));
};

export { playerChoiceRock, playerChoicePaper }