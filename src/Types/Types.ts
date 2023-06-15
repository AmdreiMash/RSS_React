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

export type Info = {
  [key: string]: number | string;
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Results = Character[];

export type Character = {
  [key: string]: number | string | { [key: string]: string; name: string; url: string } | string[];
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ResponseData = {
  [key: string]: Info | Results;
  info: Info;
  results: Results;
};
