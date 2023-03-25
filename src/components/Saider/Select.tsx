import styled from '../styled';
import React from 'react';

const Select = (props: { link: React.RefObject<HTMLSelectElement> }) => {
  return (
    <select name="country" style={styled.label} ref={props.link} defaultValue="Country">
      <option value="Country" disabled>
        Country
      </option>
      <option value="Belarus">Belarus</option>
      <option value="Russia">Russia</option>
      <option value="Ukraine">Ukraine</option>
      <option value="Polna">Polna</option>
      <option value="other">other</option>
    </select>
  );
};

export default Select;
