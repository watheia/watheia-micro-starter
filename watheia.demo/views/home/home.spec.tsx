import React from 'react';
import { render } from '@testing-library/react';
import { BasicHome } from './home.composition';

describe('home', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicHome />);
    const rendered = getByText('hello from Home');
    expect(rendered).toBeTruthy();
  });
});
