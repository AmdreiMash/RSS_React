import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardData } from 'Types/Types';

interface AppState {
  formCards: CardData[];
  serchQuery: string;
  error: string;
}

const initialState: AppState = {
  formCards: [],
  serchQuery: '',
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
    addFormCard(state, action: PayloadAction<CardData>) {
      state.formCards.push(action.payload);
    },
  },
});

export default AppSlice.reducer;
