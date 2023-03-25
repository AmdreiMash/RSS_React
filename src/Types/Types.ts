import { ReactElement } from 'react';

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
  [key: string]: string | boolean;
  name: TData;
  email: TData;
  birtday: TData;
  country: TData;
  file: TData;
  policy: TData;
  gender: TData;
};
