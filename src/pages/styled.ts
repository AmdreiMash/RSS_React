const style: { [key: string]: React.CSSProperties } = {
  productContainer: {
    display: 'flex',
    gap: '20px',
    width: '80%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  main: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  mainHeading: { display: 'flex', alignItems: 'center', gap: '30px', width: '90%' },
  notFound: {
    width: '100vw',
    height: '90vh',
    backgroundImage: `url('404 Error-rafiki-gray.svg')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
};

export default style;
