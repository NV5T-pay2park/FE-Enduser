import * as ticketAPI from './ticketAPI'
import * as Constant from '../config/config'

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch

const mockData = {
    "status": "OK",
    "message": "Success",
    "data": [
        {
            "ticketID": 220729015945334,
            "checkInTime": "2022-07-29T01:59:45Z",
            "checkOutTime": null,
            "total": null,
            "licensePlate": "98C1-55685",
            "vehicleType": "Xe máy",
            "endUserID": 34,
            "endUserName": "NaN NaN",
            "parkingLotID": 3,
            "parkingLotName": "Lý Nam Đế",
            "status": false
        },
        {
            "ticketID": 2207290159501734,
            "checkInTime": "2022-07-29T01:59:50Z",
            "checkOutTime": null,
            "total": null,
            "licensePlate": "86C1-77880",
            "vehicleType": "Xe máy",
            "endUserID": 34,
            "endUserName": "NaN NaN",
            "parkingLotID": 17,
            "parkingLotName": "Phạm Xuân Ẩn",
            "status": false
        }
    ]
}

// beforeAll(() => {
//   global.fetch = () =>
//     Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockData),
//     })
// })


// afterAll(() => {
//   global.fetch = unmockedFetch
// })

// // This is actual testing suite
// describe('test get ticket list', () => {
//   test('test get ticket list', async () => {
//     const ticketList = await ticketAPI.getTicketByEndUserId(4)
//     expect(Array.isArray(ticketList)).toEqual(true)
//     expect(ticketList.length).toEqual(2)
//     // expect(Array.isArray(data)).toEqual(true)
//   })
// })

describe('withFetch', () => {
    test('get ticket successfully', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockData),
                })
        )
      // highlight-end
  
      const ticketList = await ticketAPI.getTicketByEndUserId(4)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=4`
      )
  
      expect(Array.isArray(ticketList)).toEqual(true)
      expect(ticketList.length).toEqual(2)
    })

    test('get ticket fail', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve(mockData),
                })
        )
      // highlight-end
  
      const ticketList = await ticketAPI.getTicketByEndUserId(4)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=4`
      )
  
      expect(Array.isArray(ticketList)).toEqual(true)
      expect(ticketList.length).toEqual(0)
    })

    test('get ticket undefine', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(undefined),
                })
        )
      // highlight-end
  
      const ticketList = await ticketAPI.getTicketByEndUserId(4)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=4`
      )
  
      expect(Array.isArray(ticketList)).toEqual(true)
      expect(ticketList.length).toEqual(0)
    })
  

    test('get ticket empty', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(""),
                })
        )
      // highlight-end

      const ticketList = await ticketAPI.getTicketByEndUserId(4)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=4`
      )

      expect(Array.isArray(ticketList)).toEqual(true)
      expect(ticketList.length).toEqual(0)
    })

})