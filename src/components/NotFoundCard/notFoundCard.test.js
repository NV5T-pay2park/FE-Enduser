import React from "react";
import { render } from '@testing-library/react';

import NotFoundCard from "./index";

const mockUserID = 1
const mockInsertTicket = (data) => {
    console.log("insert new ticket")
}
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));


describe("test render list ticket", () => {
    test("test render list ticket", () => {
        render(<NotFoundCard userInfo={mockUserID} insertTicket={mockInsertTicket}/>)
    })


})