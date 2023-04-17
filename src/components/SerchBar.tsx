import React, { useState, useEffect, useRef } from 'react';
import { Input } from 'antd';
import styled from './styled';
import Label from './Saider/Elements/Lable';
import errorMessage from '../ErrorMessages';
import { useAppDiepatch, useAppSelector } from '../store/hooks/redux';
import { AppSlice } from '../store/redusers/appSlice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { SerializedError } from '@reduxjs/toolkit';

type SerchBarProps = {
  InputHeandlet: (value: string) => void;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const SearchBar = (props: SerchBarProps) => {
  const { Search } = Input;
  const { serchQuery } = useAppSelector((store) => store.AppReducer);
  const [value, setValue] = useState(serchQuery);
  const { setSerchQuery } = AppSlice.actions;
  const dispatch = useAppDiepatch();
  const { InputHeandlet, isLoading, error } = props;
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
      message={errorMessage.characters}
      status={error !== undefined}
      bottom="calc(-122% + 100vw * 0.01)"
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
        loading={isLoading}
        status={error ? 'error' : ''}
      />
    </Label>
  );
};

export default SearchBar;
