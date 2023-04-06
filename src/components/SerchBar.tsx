import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import styled from './styled';

const SearchBar = () => {
  const { Search } = Input;
  const [value, setValue] = useState(localStorage.getItem('Seach Value') || '');

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
      placeholder="Search..."
      allowClear
      onChange={(e) => {
        setValue(e.target.value);
      }}
      style={styled.searchBar}
      value={value}
      onSearch={(value) => setValue('')}
      loading={false} //! прокинуть значение
    />
  );
};

export default SearchBar;
