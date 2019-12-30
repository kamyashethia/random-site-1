import initialState from './initialState';
import {PLAY} from '../actions/actionTypes';

export default function stuff(state = initialState, action) {
  let newState;
  switch (action.type) {
    case PLAY:
      console.log('PLAY Action in the reducer')
      return action;
    default:
      return state;
  }
}
