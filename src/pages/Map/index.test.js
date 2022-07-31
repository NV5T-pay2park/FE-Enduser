import { render } from '@testing-library/react';
import React from "react";
import Markers from './markers';

const mockData = {
    state: {
        userLocation:  {
            lat: 0,
            lng: 0,
        },
        Locations: [
            {
                lat: 0, 
                lng: 0,
            },
            {
                lat: 0,
                lng: 0,
            },
        ]
    }
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {return mockData;}
}));

describe("test google map with direction", () => {
    test("test google map with direction", () => {
        render(<Markers></Markers>)        
        
    })

})
