import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Content from 'antd/es/layout/layout';
import SearchBar from '../components/SerchBar';
import { Main, Container, MainHeading } from './styles';
import Wrapper from '../components/Elements/PageWrapper';
import CharacterCard from '../components/CharacterCard';
import axios, { AxiosError } from 'axios';
import { ResponseData } from '../Types/Types';

const HomePage = () => {
  const [data, setData] = useState<ResponseData>();
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const getData = (value: string) => {
    if (value != '') {
      setLoaded(true);
      axios(`https://rickandmortyapi.com/api/character/?name=${value.toLowerCase()}`) // ?name=rick  ?name=${query}
        .then((response) => {
          setData(response.data);
          setError('');
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(false));
    } else {
      setError('You can enter something');
      setData(null as unknown as ResponseData);
    }
  };

  console.log(data);
  console.log(loaded);
  console.log(error);
  return (
    <Wrapper>
      <Header />
      {loaded && <p>Загрузка</p>}
      <Main>
        <MainHeading>
          <h1>Home</h1>
          <SearchBar getData={getData} loaded={loaded} />
        </MainHeading>
        {loaded ? (
          <p>Загрузка</p>
        ) : error !== '' ? (
          <p>{error}</p>
        ) : (
          data && (
            <Container>
              {data.results.map((e) => (
                <CharacterCard key={e.id} {...e} />
              ))}
            </Container>
          )
        )}
      </Main>
    </Wrapper>
  );
};

export default HomePage;
