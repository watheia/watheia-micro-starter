import React from 'react'
import { render } from '@testing-library/react'
import { ProTipExample } from './pro-tip.composition'

describe('molecules/pro-tip', () => {
  it('should render with the correct text', () => {
    const { getByTestId } = render(<ProTipExample />)
    expect(getByTestId('pro-tip')).toBeTruthy()
  })
})
