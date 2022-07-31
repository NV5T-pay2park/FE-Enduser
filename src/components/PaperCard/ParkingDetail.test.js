import React from "react";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ParkingDetail from "./ParkingDetail";

const mockData = {
    state:  {
        id: 1,
        location: {
            lat: 0, 
            lng: 0,
        }
    }
}

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => {return mockData;}
}));



describe('test Parking Detail', () => { 
    test('test render data success', () => {
        render(<ParkingDetail></ParkingDetail>)
        const component = screen.getByText("Hiển thị bản đồ");
        userEvent.click(component);
    })
 })