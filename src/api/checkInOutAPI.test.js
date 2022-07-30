import * as CheckInOutAPI from './checkInOutAPI'
import * as Constant from '../config/config'

// This is the section where we mock `fetch`
const unmockedFetch = global.fetch

const mockCheckinResponse = {
    "status": "OK",
    "message": "Success",
    "data": {
        "ticketID": 2207291359421734,
        "checkInTime": "2022-07-29T13:59:42Z",
        "checkOutTime": null,
        "total": null,
        "licensePlate": "34C1-35597",
        "vehicleType": "Xe máy",
        "endUserID": 34,
        "endUserName": "NaN NaN",
        "parkingLotID": 17,
        "parkingLotName": "Phạm Xuân Ẩn",
        "status": false
    }
}

describe('test requestCheckIn', () => {
    test('test requestCheckIn', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockCheckinResponse),
                })
        )
      // highlight-end

      const checkinResponse = await CheckInOutAPI.requestCheckIn(34, 17)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + '/api/checkIn', {"body": "{\"endUserID\":34,\"parkingLotID\":17}", "headers": {"Accept": "application/json, text/plain", "Content-Type": "application/json"}, "method": "POST"}
      )
      expect(checkinResponse).toBe(mockCheckinResponse)
    })

    test('test requestCheckIn', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve(mockCheckinResponse),
                })
        )
      // highlight-end

      const checkinResponse = await CheckInOutAPI.requestCheckIn(34, 17)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + '/api/checkIn', {"body": "{\"endUserID\":34,\"parkingLotID\":17}", "headers": {"Accept": "application/json, text/plain", "Content-Type": "application/json"}, "method": "POST"}
      )
      expect(checkinResponse).toEqual({})
    })
})

const mockQueryPaymentResponse = {
    "status": "OK",
    "message": "query payment url successfully",
    "data": {
        "id": "220729_4220728171709154",
        "orderUrl": "https://sbgateway.zalopay.vn/openinapp?order=eyJ6cHRyYW5zdG9rZW4iOiIyMjA3MjkwMDAxMDA0MzB6MjFXM1F1IiwiYXBwaWQiOjk5OTg4OH0",
        "zpTransToken": "220729000100430z21W3Qu"
    }
}

describe('test getCheckoutPaymentData', () => {
    test('test getCheckoutPaymentData', async () => {
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockQueryPaymentResponse),
                })
        )
      // highlight-end

      const queryPaymentResponse = await CheckInOutAPI.getCheckoutPaymentData(4, 220728171709154)
      expect(fetchMock).toHaveBeenCalledWith(
        Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=4&ticketId=220728171709154`
      )
      expect(queryPaymentResponse).toBe(mockQueryPaymentResponse)
    })

    test('test getCheckoutPaymentData fail', async () => {
      
      const responseMock = Error(`No payment data`);
      // highlight-start
      const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve(mockQueryPaymentResponse),
                })
        )
      // highlight-end
      try {
        const queryPaymentResponse = await CheckInOutAPI.getCheckoutPaymentData(4, 220728171709154)
        expect(fetchMock).toHaveBeenCalledWith(
          Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=4&ticketId=220728171709154`
        )
      } catch (err) {
        expect(fetchMock).toHaveBeenCalledWith(
          Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=4&ticketId=220728171709154`
        )
        expect(err).toEqual(responseMock)
      }
      
      
      
    })
})