import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerchBar';
import { Main, Container, MainHeading, NotFound } from './styles';
import Wrapper from '../components/Elements/PageWrapper';
import CharacterCard from '../components/CharacterCard';
import { ResponseData } from '../Types/Types';
import errorMessage from '../ErrorMessages';
import notFound from '../../assets/notFound.jpeg';
import { SyncOutlined } from '@ant-design/icons';
import Space from 'antd/es/space';
import getDataByParams from '../API/getDataByParams';
import { useAppDiepatch, useAppSelector } from '../store/hooks/redux';
import { AppSlice } from '../store/redusers/UseSlice';

const HomePage = () => {
  const [data, setData] = useState<ResponseData>();
  const [loaded, setLoaded] = useState(false);

  const { serchQuery, error, activCard } = useAppSelector((store) => store.AppReducer);
  const { setSerchQuery, setError, setActivCard } = AppSlice.actions;
  const dispatch = useAppDiepatch();

  const getData = async (value: string) => {
    setLoaded(true);
    const response = await getDataByParams([`name=${value}`]);
    if (response) {
      setData(response);
      dispatch(setError(''));
    } else {
      dispatch(setError('Invalid request, try something else'));
    }
    setLoaded(false);
  };

  useEffect(() => {
    getData(serchQuery);
  }, [serchQuery]);

  const InputHeandlet = (value: string) => {
    dispatch(setSerchQuery(value));
  };

  return (
    <Wrapper>
      <Header />
      <Main>
        <MainHeading>
          <h1>Home</h1>
          <SearchBar {...{ InputHeandlet, error, loaded }} />
        </MainHeading>
        {loaded ? (
          <Space style={{ fontSize: '20px' }} role="alert">
            Loding <SyncOutlined spin />
          </Space>
        ) : error !== '' && error !== errorMessage.characters ? (
          <NotFound data-testid="404" src={notFound} alt="Not Found" />
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
