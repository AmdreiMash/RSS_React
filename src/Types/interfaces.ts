import { FormValue, CardData } from './Types';

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
  cards: CardData[];
}

export interface SaiderProps {
  showForm: boolean;
  showFormHandler: () => void;
  addNewCard: (data: FormValue) => void;
}

export interface FormState {
  [key: string]: boolean;
}
