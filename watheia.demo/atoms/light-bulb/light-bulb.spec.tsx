import React from 'react'
import { render } from '@testing-library/react'
import { LightBulbIcon } from './light-bulb.composition'

describe('light-bulb', () => {
  it('should render with the correct text', () => {
    const { getByTestId } = render(<LightBulbIcon />)
    expect(getByTestId('light-bulb-icon')).toBeTruthy()
  })
})
