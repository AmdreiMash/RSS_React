import React from 'react';
import { Input } from 'antd';
import styled from './styled';
const { Search } = Input;
class SearchBar extends React.Component {
    state = { value: localStorage.getItem('Seach Value') || '' };
    componentWillUnmount() {
        localStorage.setItem('Seach Value', this.state.value);
    }
    render() {
        return (React.createElement(Search, { placeholder: "Search...", allowClear: true, onSearch: (value) => value !== '' && console.log(value), onChange: (e) => this.setState({ value: e.target.value }), style: styled.searchBar, value: this.state.value }));
    }
}
export default SearchBar;
