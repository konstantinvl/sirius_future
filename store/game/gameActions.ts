import { PayloadAction } from '@reduxjs/toolkit';
import { GameSlice } from '../../common/interfaces';
import { BUTTON_TYPES } from '../../common/renderData';

export const SET_GAME = 'game/setGame';

export function setGame(set: string[], ranking: BUTTON_TYPES | ''): PayloadAction<GameSlice> {
  return { type: SET_GAME, payload: { set, ranking } };
}
