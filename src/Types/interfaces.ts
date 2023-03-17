export interface IPriduct {
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

//export interface IHome extends React.Component {
//  products: JSX.Element[];
//}
