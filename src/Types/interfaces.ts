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
}
type FormValye = {
  status: boolean;
  ref: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>;
};

export interface FormState {
  [key: string]: boolean;
}
