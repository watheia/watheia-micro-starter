import React from 'react'
import { render } from '@testing-library/react'
import { TopLayoutExample } from './top-layout.composition'

describe('layouts/top-layout', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<TopLayoutExample />)
    const rendered = getByText('Hello, TopLayout!')
    expect(rendered).toBeTruthy()
  })
})
