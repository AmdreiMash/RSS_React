import React from 'react';
import Button from './Elements/Button';

const SubmitButton = () => {
  return (
    <button style={{ padding: '0', border: '0', background: 'none', boxShadow: 'none' }}>
      <Button>Submit form</Button>
    </button>
  );
};

export default SubmitButton;
