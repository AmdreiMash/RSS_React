import React from 'react';
import { Input } from 'antd';
import styled from './steled/styled';

const { Search } = Input;

class SearchBar extends React.Component {
  state = { value: localStorage.getItem('Seach Value') || '' };
  componentWillUnmount() {
    localStorage.setItem('Seach Value', this.state.value);
  }
  render() {
    return (
      <Search
        placeholder="Search..."
        allowClear
        onChange={(e) => this.setState({ value: e.target.value })}
        style={styled.searchBar}
        value={this.state.value}
      />
    );
  }
}

export default SearchBar;
