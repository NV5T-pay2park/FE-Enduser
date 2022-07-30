import React from 'react'
import { render } from '@testing-library/react';

import BottomNavigationBar from './BottomNavigationBar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));

describe("test bottom navigation", () => {
    test("test render bottom navigation bar", () => {

        render(<BottomNavigationBar />)
    })
})