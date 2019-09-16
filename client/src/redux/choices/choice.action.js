import axios from 'axios';
import { ChoiceTypes } from './choice.types';

const playerChoiceRock = () => dispatch => {
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

const playerChoiceScissors = () => dispatch => {
  axios
    .post('/play', {
      params: {
        player: 4
      }
    })
    .then(response => {
      if (response.data.results === 'win') {
        dispatch({
          type: ChoiceTypes.WIN_SCISSORS
        });
      } else if (response.data.results === 'lose') {
        dispatch({
          type: ChoiceTypes.LOSE_SCISSORS
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_SCISSORS
        });
      }
    })
    .catch(err => console.error(err));
};

const playerChoiceSpock = () => dispatch => {
  axios
    .post('/play', {
      params: {
        player: 5
      }
    })
    .then(response => {
      if (response.data.results === 'win') {
        dispatch({
          type: ChoiceTypes.WIN_SPOCK
        });
      } else if (response.data.results === 'lose') {
        dispatch({
          type: ChoiceTypes.LOSE_SPOCK
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_SPOCK
        });
      }
    })
    .catch(err => console.error(err));
};

const playerChoiceLizard = () => dispatch => {
  axios
    .post('/play', {
      params: {
        player: 6
      }
    })
    .then(response => {
      if (response.data.results === 'win') {
        dispatch({
          type: ChoiceTypes.WIN_LIZARD
        });
      } else if (response.data.results === 'lose') {
        dispatch({
          type: ChoiceTypes.LOSE_LIZARD
        });
      } else {
        dispatch({
          type: ChoiceTypes.TIE_LIZARD
        });
      }
    })
    .catch(err => console.error(err));
};

export { 
  playerChoiceRock, 
  playerChoicePaper,
  playerChoiceScissors,
  playerChoiceSpock,
  playerChoiceLizard 
}