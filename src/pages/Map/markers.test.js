import { render } from '@testing-library/react';
import React from "react";
import Map from './index';

const mockData = {
    state: {
        origin:  {
            lat: 0,
            lng: 0,
        },
        destinantion: {
            lat: 0, 
            lng: 0,
        }
    }
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {return mockData;}
}));

describe("test google map with direction", () => {
    test("test google map with direction", () => {
        render(<Map/>) 
    })

})
