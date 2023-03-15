import React from 'react';
import { Input } from 'antd';

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
        onSearch={(value: string) => value !== '' && console.log(value)}
        onChange={(e) => this.setState({ value: e.target.value })}
        style={{ flex: '1', alignSelf: 'center' }}
        value={this.state.value}
      />
    );
  }
}

export default SearchBar;
