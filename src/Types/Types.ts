export type CardData = {
  [key: string]: string | boolean | FileList;
  name: string;
  email: string;
  birthday: string;
  country: string;
  file: FileList;
  policy: boolean;
  gender: string;
};
