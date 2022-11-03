import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GameSlice } from '../../common/interfaces';

const initialState: GameSlice = {
  set: [],
  ranking: '',
};

export const sliderSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<GameSlice>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default sliderSlice.reducer;
