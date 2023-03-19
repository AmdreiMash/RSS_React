import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import SearchBar from '../components/SerchBar';

describe('Search bar', () => {
  it('Shold save value in local storge', async () => {
    const { unmount } = render(<SearchBar />);
    const testValue = 'Hello Test';

    let input = screen.getByPlaceholderText<HTMLInputElement>('Search...');
    await userEvent.type(input, testValue);

    unmount();

    expect(localStorage.getItem('Seach Value')).toBe(testValue);

    render(<SearchBar />);

    input = screen.getByPlaceholderText('Search...');

    expect(input.value).toBe(testValue);
  });
});
