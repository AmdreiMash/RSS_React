import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import styled from './styled';
import Label from './Saider/Elements/Lable';
import errorMessage from '../ErrorMessages';
import { useAppDiepatch, useAppSelector } from '../store/hooks/redux';
import { AppSlice } from '../store/redusers/UseSlice';

type SerchBarProps = {
  InputHeandlet: (value: string) => void;
  loaded: boolean;
};

const SearchBar = (props: SerchBarProps) => {
  const { Search } = Input;
  const { serchQuery, error } = useAppSelector((store) => store.AppReducer);
  const [value, setValue] = useState(serchQuery);
  const { setSerchQuery } = AppSlice.actions;
  const dispatch = useAppDiepatch();
  const { InputHeandlet, loaded } = props;
  const valueRef = useRef('');

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      dispatch(setSerchQuery(valueRef.current));
    };
  }, []);

  return (
    <Label
      width="90%"
      style={{ height: '27px' }}
      message={error}
      status={error !== '' || error !== errorMessage.characters}
      bottom="calc(-120% + 100vw * 0.01)"
    >
      <Search
        placeholder="Enter a character name"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        style={styled.searchBar}
        value={value}
        onSearch={(value) => {
          InputHeandlet(value);
        }}
        loading={loaded}
        status={error == '' ? '' : 'error'}
      />
    </Label>
  );
};

export default SearchBar;
