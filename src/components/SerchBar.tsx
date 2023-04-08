import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import styled from './styled';
import Label from './Saider/Elements/Lable';
import errorMessage from '../ErrorMessages';

type SerchBarProps = {
  getData: (value: string) => void;
  loaded: boolean;
  error: string;
};

const SearchBar = (props: SerchBarProps) => {
  const { Search } = Input;
  const [value, setValue] = useState(localStorage.getItem('Seach Value') || '');
  const { loaded, getData, error } = props;

  const valueRef = useRef('');

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('Seach Value', valueRef.current);
    };
  }, []);

  return (
    <Label
      width="90%"
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
          getData(value);
        }}
        loading={loaded}
        status={error == '' ? '' : 'error'}
      />
    </Label>
  );
};

export default SearchBar;
