export type CardData = {
  [key: string]: string | boolean | FileList | undefined;
  name: string;
  email: string;
  birthday: string;
  country: string;
  file: FileList;
  policy: boolean;
  gender: string;
  img?: string;
};
