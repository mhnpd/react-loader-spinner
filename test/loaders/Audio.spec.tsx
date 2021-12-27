import React from 'react'
import Audio from '../../src/loader/Audio'
import { render } from '@testing-library/react'

test('Audio Loader', () => {
  const component = render(<Audio height={100} color={'red'} width={100} />)
  expect(component).to.exist()
})
