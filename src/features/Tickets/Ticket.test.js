import React from "react";
import { render } from '@testing-library/react';

import Ticket from './Ticket'

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
}));

describe("test render list ticket", () => {
    test("test render list ticket", () => {
        render(<Ticket ticketData={mockTicket}/>)
    })



})