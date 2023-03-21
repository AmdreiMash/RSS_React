import React from 'react';
import Wrapper from './Wrapper';
import ShowButton from './showButton';

class Saider extends React.Component {
  state = {
    show: true,
  };

  showHandler = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <Wrapper active={this.state.show}>
        <h1>Saider</h1>
        <ShowButton onClick={this.showHandler}>add card</ShowButton>
      </Wrapper>
    );
  }
}

export default Saider;
