import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerchBar';
import { Main, Container, MainHeading, NotFound } from './styles';
import Wrapper from '../components/Elements/PageWrapper';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';
import { ResponseData } from '../Types/Types';
import errorMessage from '../ErrorMessages';
import notFound from '../../assets/notFound.jpeg';
import { SyncOutlined } from '@ant-design/icons';
import Space from 'antd/es/space';

const HomePage = () => {
  const [data, setData] = useState<ResponseData>();
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [qyery, setQyery] = useState(localStorage.getItem('Seach Value') || '');

  const getData = (value: string) => {
    setLoaded(true);
    axios(`https://rickandmortyapi.com/api/character/?name=${value.toLowerCase()}`)
      .then((response) => {
        setData(response.data);
        setError('');
      })
      .catch(() => setError('Invalid request, try something else'))
      .finally(() => setLoaded(false));
  };

  const InputHeandlet = (value: string) => {
    setQyery(value);
  };

  useEffect(() => {
    getData(qyery);
  }, [qyery]);

  console.log(data);
  console.log(loaded);
  console.log(error);
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainHeading>
          <h1>Home</h1>
          <SearchBar {...{ InputHeandlet, error, loaded }} />
        </MainHeading>
        {loaded ? (
          <Space style={{ fontSize: '20px' }}>
            Loding <SyncOutlined spin />
          </Space>
        ) : error !== '' && error !== errorMessage.characters ? (
          <NotFound src={notFound} alt="Not Found" />
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
