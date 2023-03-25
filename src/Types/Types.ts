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
