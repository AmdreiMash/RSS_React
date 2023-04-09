import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';
import SearchBar from '../components/SerchBar';

describe('Search bar', () => {
  it('Shold save value in local storge', async () => {
    const { unmount } = render(
      <SearchBar error="123" InputHeandlet={(value) => value} loaded={false} />
    );
    const testValue = 'Hello Test';

    let input = screen.getByPlaceholderText<HTMLInputElement>('Enter a character name');
    await userEvent.type(input, testValue);

    unmount();

    expect(localStorage.getItem('Seach Value')).toBe(testValue);

    render(<SearchBar error="123" InputHeandlet={(value) => value + 1} loaded={false} />);

    input = screen.getByPlaceholderText('Enter a character name');

    expect(input.value).toBe(testValue);
  });
});
