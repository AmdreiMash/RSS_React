export type Ref = React.RefObject<HTMLInputElement>;

export type InputProps = {
  status: boolean;
  onChange: (event: React.ChangeEvent<Element>) => void;
  name: string;
  ref: Ref;
};

export type RadioProps = {
  male: Ref;
  female: Ref;
};

export type TData = string | boolean;

export type FormValue = {
  [value: string]: string | boolean;
  name: TData;
  email: TData;
  birtday: TData;
  country: TData;
  file: TData;
  policy: TData;
  gender: TData;
};

export type CardData = {
  [key: string]: string | boolean;
  name: string;
  email: string;
  birtday: string;
  country: string;
  file: string;
  policy: boolean;
  gender: string;
};
