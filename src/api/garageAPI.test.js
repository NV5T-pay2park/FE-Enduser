import * as GarageAPI from './garageAPI';
import * as Constant from '../config/config';

const unmockedFetch = global.fetch

const mockUserLocation = {
    lat: 0, 
    lng: 0,
} 

const mockLocationString = "0,0"
const mockVehicleType = ["1", "2"];
const mockVehicleString = "1,2"
const mockDistrict = "Tất cả";
const mockSearchString = "";

const mockDataDetail = {
    "status": "OK",
    "message": "get parking by id successfully ",
    "data": {
    "id": 2,
    "parkingLotName": "Hai Bà Trưng",
    "street": "Kinh Dương Vương",
    "ward": "An Lạc",
    "district": "Quận Bình Tân",
    "city": "TPHCM",
    "lat": 10.846667289733887,
    "lng": 106.77777862548828,
    "status": 0,
    "timeOpen": "05:00:00",
    "timeClose": "22:00:00",
    "phoneNumber": "982347126",
    "distance": 6,
    "timeMoving": 12,
    "priceTicketList": [
    {
        "vehicleType": {
            "id": 0,
            "vehicleTypeName": "Xe đạp",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 0,
        "price": 3000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 0,
            "vehicleTypeName": "Xe đạp",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 4,
        "price": 2000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 0,
            "vehicleTypeName": "Xe đạp",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 8,
        "price": 1000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 1,
            "vehicleTypeName": "Xe máy",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 0,
        "price": 5000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 1,
            "vehicleTypeName": "Xe máy",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 4,
        "price": 3000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 1,
            "vehicleTypeName": "Xe máy",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 8,
        "price": 2000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 2,
            "vehicleTypeName": "Xe hơi 4 hoặc 7 chỗ",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 0,
        "price": 20000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 2,
            "vehicleTypeName": "Xe hơi 4 hoặc 7 chỗ",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 4,
        "price": 10000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 2,
            "vehicleTypeName": "Xe hơi 4 hoặc 7 chỗ",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 8,
        "price": 5000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 3,
            "vehicleTypeName": "Xe hơi 16 chỗ",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 0,
        "price": 50000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 3,
            "vehicleTypeName": "Xe hơi 16 chỗ",
            "hibernateLazyInitializer": {}
    },
        "periodTime": 4,
        "price": 25000,
        "unit": 4
    },
    {
        "vehicleType": {
            "id": 3,
            "vehicleTypeName": "Xe hơi 16 chỗ",
            "hibernateLazyInitializer": {}
        },
        "periodTime": 8,
        "price": 10000,
        "unit": 4
    }
    ]
  }
}

const mockData = {
    "status": "OK",
    "message": "search and filter parking successfully ",
    "data": [
        {
            "id": 4,
            "parkingLotName": "Ngô Quyền",
            "timeOpen": "05:00:00",
            "timeClose": "22:00:00",
            "street": "Đồng Khởi",
            "ward": "Bến Nghé",
            "district": "Quận 1",
            "city": "TPHCM",
            "lat": 10.86388874053955,
            "lng": 106.78277587890625,
            "status": 0,
            "phoneNumber": "982347126",
            "distance": 3,
            "timeMoving": 12
        },
        {
            "id": 5,
            "parkingLotName": "Đinh Bộ Lĩnh",
            "timeOpen": "05:00:00",
            "timeClose": "22:00:00",
            "street": "Lê Lợi",
            "ward": "Bến Thành",
            "district": "Quận 1",
            "city": "TPHCM",
            "lat": 10.882222175598145,
            "lng": 106.76889038085938,
            "status": 0,
            "phoneNumber": "982347126",
            "distance": 4.1,
            "timeMoving": 16
        }
    ]
}

describe('withFetch', () => {

    test('get data sucessfully', async () => {
        // start
        const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockData),
                })
        )
        // end

        const garageList = await GarageAPI.getParkingListSearch(mockSearchString, mockDistrict, mockUserLocation, mockVehicleType);
        expect(fetchMock).toHaveBeenCalledWith(
            Constant.SERVER_BASE_URL + `/api/searchAndFilterParking?stringSearch=${mockSearchString}&vehicleTypes=${mockVehicleString}&district=${mockDistrict}&coordinates=${mockLocationString}`
        )
        expect(Array.isArray(garageList.data)).toEqual(true)
        expect(garageList.status).toEqual("OK")
    })

    test('get data fail', async () => {
         // start
        const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({data: []}),
                })
        )
        // end
        const garageList = await GarageAPI.getParkingListSearch(null, "", mockUserLocation, [""]);
        expect(fetchMock).toHaveBeenCalledWith(
            Constant.SERVER_BASE_URL + `/api/searchAndFilterParking?stringSearch=&vehicleTypes=&district=&coordinates=${mockLocationString}`
        )
        expect(Array.isArray(garageList.data)).toEqual(true)
        expect(garageList.data.length).toEqual(0)
        expect(garageList.status).toEqual(undefined)
    })

    test('get detail success', async () => {
        const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockDataDetail),
                })
        )

        const detailInfo = await GarageAPI.getDetailGarage(1, mockUserLocation);
        expect(fetchMock).toHaveBeenCalledWith(
            Constant.SERVER_BASE_URL + `/api/getAllParking/1?coordinates=0,0`
        )
        expect(Array.isArray(detailInfo.data.priceTicketList)).toEqual(true);
        expect(detailInfo.data.priceTicketList.length).toEqual(12);
        expect(detailInfo.status).toEqual("OK")
    })

    test('get detail fail', async () => {
        const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: false,
                    json: () => Promise.resolve({status: "error"}),
                })
        )

        const detailInfo = await GarageAPI.getDetailGarage(1000, mockUserLocation);
        expect(fetchMock).toHaveBeenCalledWith(
            Constant.SERVER_BASE_URL + `/api/getAllParking/1000?coordinates=0,0`
        )
        expect(detailInfo.status).toEqual("error")
    })

    test('get detail null location', async () => {
        const fetchMock = jest
        .spyOn(global, 'fetch')
        .mockImplementation(() =>
        Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockDataDetail),
                })
        )

        const detailInfo = await GarageAPI.getDetailGarage(1, null);
        expect(fetchMock).toHaveBeenCalledWith(
            Constant.SERVER_BASE_URL + `/api/getAllParking/1?coordinates=`
        )
        expect(Array.isArray(detailInfo.data.priceTicketList)).toEqual(true);
        expect(detailInfo.data.priceTicketList.length).toEqual(12);
        expect(detailInfo.status).toEqual("OK")
    })

})