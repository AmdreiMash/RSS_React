import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardData, Character } from 'Types/Types';

interface AppState {
  formCards: CardData[];
  homeCards: Character[];
  serchQuery: string;
  activCard: number;
  error: string;
}

const initialState: AppState = {
  formCards: [],
  homeCards: [],
  serchQuery: '',
  activCard: 0,
  error: '',
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSerchQuery(state, action: PayloadAction<string>) {
      state.serchQuery = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setActivCard(state, action: PayloadAction<number>) {
      state.activCard = action.payload;
    },
    addFormCard(state, action: PayloadAction<CardData>) {
      state.formCards.push(action.payload);
    },
    setHomeCards(state, action: PayloadAction<Character[]>) {
      state.homeCards = action.payload;
    },
  },
});

export default AppSlice.reducer;
