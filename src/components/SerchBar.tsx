import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import styled from './styled';

const SearchBar = () => {
  const { Search } = Input;
  const [value, setValue] = useState(localStorage.getItem('Seach Value') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('Seach Value', value);
    };
  }, [value]);

  return (
    <Search
      placeholder="Search..."
      allowClear
      onChange={(e) => {
        setValue(e.target.value);
      }}
      style={styled.searchBar}
      value={value}
    />
  );
};

export default SearchBar;
