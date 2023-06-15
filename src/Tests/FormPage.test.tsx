import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

describe('FormPage', () => {
  it('renders FormPage', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );
    const addNewCard = screen.getByText('Add card');

    expect(addNewCard).toBeInTheDocument;

    await userEvent.click(addNewCard);

    expect(addNewCard).toHaveTextContent('Close');

    const name = screen.getByLabelText(/Name/i) as HTMLInputElement;
    const email = screen.getByLabelText(/Email/i) as HTMLInputElement;
    const birthday = screen.getByLabelText(/Birthday/i) as HTMLInputElement;
    const foto = screen.getByLabelText(/Add foto/i) as HTMLInputElement;
    const polycy = screen.getByLabelText(
      /I have read and agree with the privacy policy/i
    ) as HTMLInputElement;
    const gender = screen.getByDisplayValue(/female/i) as HTMLInputElement;
    const submit = screen.getByRole('button');
    await userEvent.click(submit);

    expect(name && email && birthday && foto && polycy && gender && submit).toBeInTheDocument;
  });
});
