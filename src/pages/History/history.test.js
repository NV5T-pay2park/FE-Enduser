import React from "react";
import { render } from '@testing-library/react';

import HistoryTicketPage from "./index";

const mockList = [
    {
        "ticketID": 8,
        "checkInTime": "2022-07-18T14:27:46Z",
        "checkOutTime": null,
        "total": null,
        "licensePlate": "77C1-86249",
        "vehicleType": "Xe máy",
        "endUserID": 6,
        "endUserName": "TheeeHman Smifter",
        "parkingLotID": 5,
        "parkingLotName": "Đinh Bộ Lĩnh",
        "status": false
    },
    {
        "ticketID": 10,
        "checkInTime": "2022-07-18T14:27:47Z",
        "checkOutTime": null,
        "total": null,
        "licensePlate": "77C1-11641",
        "vehicleType": "Xe máy",
        "endUserID": 6,
        "endUserName": "TheeeHman Smifter",
        "parkingLotID": 7,
        "parkingLotName": "Lý Công Uẩn",
        "status": true
    },
    {
        "ticketID": 15,
        "checkInTime": "2022-07-18T14:27:48Z",
        "checkOutTime": null,
        "total": null,
        "licensePlate": "77C1-27549",
        "vehicleType": "Xe máy",
        "endUserID": 6,
        "endUserName": "TheeeHman Smifter",
        "parkingLotID": 4,
        "parkingLotName": "Ngô Quyền",
        "status": false
    }
]
describe("test render list ticket", () => {
    test("test render list ticket", () => {
        render(<HistoryTicketPage ticketList={mockList}/>)
    })

})