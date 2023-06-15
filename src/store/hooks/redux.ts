import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispetch, RootState } from 'store/store';

export const useAppDiepatch = () => useDispatch<AppDispetch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
