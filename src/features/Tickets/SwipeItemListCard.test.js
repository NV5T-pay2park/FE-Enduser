import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { formatMoney } from '../../services';
import SwipeItemListCard from './SwipeItemListCard';

const mockTicket = {
    "ticketID": 8,
    "checkInTime": "2022-07-18T14:27:46Z",
    "checkOutTime": null,
    "amount": 10000,
    "licensePlate": "77C1-86249",
    "vehicleType": "Xe máy",
    "endUserID": 6,
    "endUserName": "TheeeHman Smifter",
    "parkingLotID": 5,
    "parkingLotName": "Đinh Bộ Lĩnh",
    "status": true
}

test('test render paid card', async () => {
    render(<SwipeItemListCard ticket={mockTicket} />);

    const ticketName = screen.getByText(`Nhà xe ${mockTicket.parkingLotName}`)
    const checkinTime = screen.getByText(/Giờ gửi/)
    const paymentStatus = screen.getByText("đã thanh toán")
    const money = screen.getByText(`-10000 đ`)
    expect(ticketName).toBeInTheDocument();
    expect(checkinTime).toBeInTheDocument();
    expect(paymentStatus).toBeInTheDocument();
    expect(money).toBeInTheDocument();
  });