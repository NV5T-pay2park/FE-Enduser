import * as Constant from '../config/config';

export const getGaragesList = async (location, vehicleType) => {
    
    const vehicleString = vehicleType.filter(Boolean).join(",");
    var parkingData;
    if (location === null) {
        parkingData = await fetch(Constant.SERVER_BASE_URL + `/api/filterParking?coordinates=&vehicleTypes=${vehicleString}`)
    }
    else {
         parkingData = await fetch(Constant.SERVER_BASE_URL + `/api/filterParking?coordinates=${location.lat},${location.lng}&vehicleTypes=${vehicleString}`)
    }
    
    const parkingResult = await parkingData.json()
    return parkingResult
}

export const getDetailGarage = async (id, location) => {

    var detailData;
    if (location === null || (location.lat == 0 && location.lng == 0)) {
        detailData = await fetch(Constant.SERVER_BASE_URL + `/api/getAllParking/${id}?coordinates=`)
    }
    else {
        detailData = await fetch(Constant.SERVER_BASE_URL + `/api/getAllParking/${id}?coordinates=${location.lat},${location.lng}`)
    }

    if (!detailData.ok) {
        return {status: "error"}
    }
        
    
    const parkingResult = await detailData.json()
    return parkingResult

}

export const getParkingListSearch = async (str, district, location, vehicleType) => {
    
    if (str == null || str == undefined) str = "";
    if (vehicleType == null || vehicleType == undefined) vehicleType = [];

    if (vehicleType == []) {
        return {data: []};
    }

    
    const locationString = (location == null ? "": `${location.lat},${location.lng}`);
    const vehicleString = vehicleType.filter(Boolean).join(",");
    const request_url = Constant.SERVER_BASE_URL + `/api/searchAndFilterParking?stringSearch=${str}&vehicleTypes=${vehicleString}&district=${district}&coordinates=${locationString}`;
    const dataSearch = await fetch(request_url);

    if (!dataSearch.ok) {
        return {data: []}
    }

    const searchResult = await dataSearch.json()

    return searchResult
}
