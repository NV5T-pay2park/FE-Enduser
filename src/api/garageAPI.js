import * as Constant from '../config/config';

export const getDetailGarage = async (id, location) => {

    var detailData;
    if (location === null) {
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
    if (vehicleType == null || vehicleType == undefined) return {data: []};
    
    const locationString = (location == null ? "": `${location.lat},${location.lng}`);
    const vehicleString = vehicleType.filter(Boolean).join(",");
    const request_url = Constant.SERVER_BASE_URL + `/api/searchAndFilterParking?stringSearch=${str}&vehicleTypes=${vehicleString}&district=${district}&coordinates=${locationString}`;
    const dataSearch = await fetch(request_url);

    const searchResult = await dataSearch.json()

    return searchResult
}
