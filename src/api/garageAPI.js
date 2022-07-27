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
    if (location === null) {
        detailData = await fetch(Constant.SERVER_BASE_URL + `/api/getAllParking/${id}?coordinates=`)
    }
    else {
        detailData = await fetch(Constant.SERVER_BASE_URL + `/api/getAllParking/${id}?coordinates=${location.lat},${location.lng}`)
    }
        
    
    const parkingResult = await detailData.json()
    return parkingResult

}

export const getParkingListSearch = async (str) => {
    var dataSearch;
    if (str == null || str == "") {
        dataSearch = await fetch(Constant.SERVER_BASE_URL + `/api/searchParking/?stringSearch`)
    } 
    else {
        dataSearch = await fetch(Constant.SERVER_BASE_URL + `/api/searchParking/?stringSearch=${str}`)
    }

    const searchResult = await dataSearch.json()
    return searchResult
}

