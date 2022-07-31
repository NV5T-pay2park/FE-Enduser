import React from "react";
import { render } from '@testing-library/react';

import Checkout from './index'

const mockTicket = {
    "ticketID": 15,
    "checkInTime": "2022-07-18T14:27:48Z",
    "checkOutTime": null,
    "amount": null,
    "licensePlate": "77C1-27549",
    "vehicleType": "Xe máy",
    "endUserID": 6,
    "endUserName": "TheeeHman Smifter",
    "parkingLotID": 4,
    "parkingLotName": "Ngô Quyền",
    "status": false
}

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => {
    return {
        state: mockTicket
    }
  },
}));

describe("test QrPage", () => {
    test("test render", () => {
        render(<Checkout/>)
    })
})