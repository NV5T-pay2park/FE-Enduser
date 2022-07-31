import React from 'react'
import { render } from '@testing-library/react'

import QrPage from '.'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test QrPage", () => {
    test("test render", () => {
        render(<QrPage/>)
    })
})