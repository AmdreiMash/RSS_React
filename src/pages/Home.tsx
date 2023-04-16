import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SerchBar';
import { Main, Container, MainHeading, NotFound } from './styles';
import Wrapper from '../components/Elements/PageWrapper';
import CharacterCard from '../components/CharacterCard';
import notFound from '../../assets/notFound.jpeg';
import { SyncOutlined } from '@ant-design/icons';
import Space from 'antd/es/space';
import { useAppDiepatch, useAppSelector } from '../store/hooks/redux';
import { AppSlice } from '../store/redusers/UseSlice';
import { useCharactersQuery } from '../service/ChacterService';

const HomePage = () => {
  const { serchQuery } = useAppSelector((store) => store.AppReducer);
  const { setSerchQuery } = AppSlice.actions;
  const { data, error, isFetching } = useCharactersQuery(serchQuery);
  const dispatch = useAppDiepatch();

  const InputHeandlet = (value: string) => {
    dispatch(setSerchQuery(value));
  };
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainHeading>
          <h1>Home</h1>
          <SearchBar {...{ InputHeandlet, error, isLoading: isFetching }} />
        </MainHeading>
        {isFetching ? (
          <Space style={{ fontSize: '20px' }} role="alert">
            Loding <SyncOutlined spin />
          </Space>
        ) : error || data?.results.length === 0 ? (
          <NotFound data-testid="404" src={notFound} alt="Not Found" />
        ) : (
          data?.results && (
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
