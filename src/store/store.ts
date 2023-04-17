import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import AppReducer from './redusers/appSlice';
import { characterApi } from '../service/ChacterService';
const rootReducer = combineReducers({
  AppReducer,
  [characterApi.reducerPath]: characterApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
  });
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispetch = AppStore['dispatch'];
