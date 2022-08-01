import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

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