import { FormValue } from './Types';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FormCardsProps {
  showForm: boolean;
}

export interface SaiderProps extends FormCardsProps {
  showFormHandler: () => void;
  addNewCard: (data: FormValue) => void;
}

export interface FormState {
  [key: string]: boolean;
}
