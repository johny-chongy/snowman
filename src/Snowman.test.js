import React from 'react'
import Snowman from './Snowman'
import { render, fireEvent } from '@testing-library/react'

////smoketest
test('does not crash on load', function () {
  render(<Snowman words='apple' />)
})

test('Snapshot test', function () {
  const { container, debug } = render(<Snowman words='apple' />)
  const badGuesses = ['b', 'c', 'd', 'f', 'g', 'r']
  const badButtons = badGuesses.map(char =>
    container.querySelector(`button[value="${char}"]`)
  )

  for (let guess of badButtons) {
    fireEvent.click(guess)
  }
  debug(container)
  expect(container).toMatchSnapshot()
})
