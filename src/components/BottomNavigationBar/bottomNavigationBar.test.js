import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BottomNavigationBar from './BottomNavigationBar';
import { BottomNavigation } from '@mui/material';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, "window", "get");
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe("test bottom navigation", () => {
    test("test render bottom navigation bar", () => {

        render(<BottomNavigationBar />)
    })

    test("test click button bottom", () => {
        BottomNavigationBar.handleScan = jest.fn();
        // windowSpy.mockImplementation(() => ({
        //     ZaloPay: {
        //       isZaloPay: false
        //     }
        //   }));
        render(<BottomNavigationBar />)

        fireEvent.click(screen.getByText("Vé"));
        fireEvent.click(screen.getByText("Quét"));
        fireEvent.click(screen.getByText("Tìm kiếm"));
        // userEvent.click(screen.getByTestId("qr-page"));
    })

    test("test click button bottom", () => {
        render(<BottomNavigationBar />)
        fireEvent.click(screen.getByText("Tìm kiếm"));

    })


})