import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import styled from './styled';

type SerchBarProps = {
  getData: (value: string) => void;
  loaded: boolean;
};

const SearchBar = (props: SerchBarProps) => {
  const { Search } = Input;
  const [value, setValue] = useState(localStorage.getItem('Seach Value') || '');
  const { loaded, getData } = props;

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
    />
  );
};

export default SearchBar;
