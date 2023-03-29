import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import FormCard from '../components/FormCard/FormCard';

const data = {
  birthday: '1999-11-11',
  country: 'Belarus',
  email: 'Ahdma@mail.ru',
  file: 'blob:http://localhost:8081/62d32cbf-cdf6-47fd-a9fe-6b8f055884d8',
  gender: 'male',
  name: 'Андрей',
  policy: true,
};
describe('FormCard', () => {
  it('renders FormCard', () => {
    render(
      <BrowserRouter>
        <FormCard {...data} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Belarus/i)).toBeInTheDocument;
    expect(screen.getByText(/male/i)).toBeInTheDocument;
    expect(screen.getByText(/Андрей/i)).toBeInTheDocument;
    expect(screen.getByText(/true/i)).toBeInTheDocument;
    expect(screen.getByText(/1999.11.11/i)).toBeInTheDocument;
    expect(screen.getByText(/Ahdma@mail.ru/i)).toBeInTheDocument;
  });
});
