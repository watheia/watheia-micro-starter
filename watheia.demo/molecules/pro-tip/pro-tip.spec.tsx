import React from 'react';
import { render } from '@testing-library/react';
import { BasicProTip } from './pro-tip.composition';

describe('pro-tip', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicProTip />);
    const rendered = getByText('hello from ProTip');
    expect(rendered).toBeTruthy();
  });
});
