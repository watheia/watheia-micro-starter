import React from 'react'
import { render } from '@testing-library/react'
import { BasicLink } from './link.composition'

describe('atoms/link', () => {
  it('should render with the correct text', () => {
    const { getByTestId } = render(<BasicLink />)
    expect(getByTestId('basic-link')).toBeTruthy()
  })
})
