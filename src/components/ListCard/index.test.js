import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ListCard from '.';
import ListItemButton from '@mui/material/ListItemButton';

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const mockList = [
    {
        id: 1,
        parkingLotName: "", 
        address: "",

    },
];

const mockLocation = {
    lat: 0, 
    lng: 0,
}

const mockListNull = null;

describe("Test list card", () => {
    it("test list card with not null", () => {
        render(<ListCard list={mockList} location={mockLocation} ></ListCard>);
        fireEvent.click(screen.getByRole('button'));
    })
    it("test list card with null", () => {
        render(<ListCard list={mockListNull} location={mockLocation} ></ListCard>);
    })
  
    
})

