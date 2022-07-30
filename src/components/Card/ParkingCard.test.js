import React from "react";
import { render } from '@testing-library/react';

import ParkingCard from './ParkingCard'

const mockParking = {
    "id": 1,
    "parkingLotName": "Hùng Vương",
    "timeOpen": 5,
    "timeClose": 22,
    "street": "Tố Hữu",
    "ward": "An Khánh",
    "district": "Thành phố Thủ Đức",
    "city": "TPHCM",
    "lat": 10.783888816833496,
    "ing": 106.7347183227539,
    "status": 0,
    "phoneNumber": "982347126",
    "distance": 3.4,
    "timeMoving": 4
}


describe('test render ParkingCard', () => {
    it('test render not payment card', () => {
        render(<ParkingCard value={mockParking}/>)
    
        
    });
});
