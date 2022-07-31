import React from "react";
import { render } from '@testing-library/react';
import { QRCode } from 'react-qrcode-logo';
import QrTicket from './QrTicket';

const mockData = {
    endUserID: 0, 
    ticketID: 0,
}


// const qrcode = require('react-qrcode-logo')

jest.mock('react-qrcode-logo', () => ({
  ...jest.requireActual('react-qrcode-logo'), // This is the golden nugget.
  QRCode: jest.fn()
}));



describe("test qr ticket", () => {
    test("qr ticket", () => {
        
        render(<QrTicket data={mockData}></QrTicket>);
        //expect(spy).toHaveBeenCalled();
    })
})