import { createAction, handleActions } from 'redux-actions';
import { HIDE_SNACK, SHOW_SNACK } from '../constants';

const initialState = {
  message: '',
  show: false,
  status: 'error'
};

export const hideSnack = createAction(HIDE_SNACK);
export const showSnack = createAction(SHOW_SNACK);


export default handleActions({
  [HIDE_SNACK]: (state) => ({
    ...state,
    message: '',
    show: false
  }),

  [SHOW_SNACK]: (state, { payload }) => ({
    ...state,
    message: payload.message,
    show: true,
    status: payload.status
  })
}, initialState);