import React from 'react';
import { render } from '@testing-library/react';
import { BasicBlog } from './blog.composition';

describe('blog', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBlog />);
    const rendered = getByText('hello from Blog');
    expect(rendered).toBeTruthy();
  });
});
