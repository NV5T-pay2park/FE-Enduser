export const formatDateTime = (datetime) => {
    if (datetime !== undefined && datetime !== null && datetime !== "") {
        // let dt1 = datetime.replace(/-/g, "/")
        let dtWithoutSecond = datetime.substring(0, datetime.length - 3)
        // let dtRemoveDummyCharacter = dtWithoutSecond.replace("T", " ")
        return dtWithoutSecond
    }
    return "18/07/2022 14:27"
}

export const getCheckedNullList = (list) => {
    if (!Array.isArray(list)) return []
    if (!list?.length || list?.length <= 0) {
        return [];
    }
    return list
}

export const getZaloPayID = async () => {
    let zlpID = 2
    if (window.ZaloPay.isZaloPay) {
        const zlpIDJSON = await window.ZLP.User().getUserInfo()
        zlpID = zlpIDJSON.id
    } else {
        zlpID = "aptx4869"
    }
    return zlpID
}

export const checkIfObjectNull = (obj) => {
    if (obj === null || obj === undefined) {
        return {};
    }
    return obj;
}

export const checkIfLocationNull = (obj) => {
    if (obj === null || obj === undefined) {
        return {
            lat: 0,
            lng: 0,
        }
    }
    return obj;
}

export const checkIfStringNull = (str) => {
    if (str === null || str === undefined) {
        return '';
    }
    return str;
}

export const checkIfNullDataListParking = (obj) => {
    if (obj == null || obj == undefined) {
        return {
            data: []
        }
    }
    return obj;
}

export const checkIfDetailParkingNull = (obj) => {
    if (obj == null || obj == undefined) {
        return {
            parkingLotName: "",
            timeMoving: 0, 
            distance: 0, 
            street: "", 
            ward: "", 
            city: "",
            timeOpen: "",
            timeClose: "",
            phoneNumber: "",
            status: "",
            location: {
                lat: 0, 
                lng: 0,
            }
        }
    }
    return obj;
}


export const formatMoney = (x) => {
    return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

export const ZaloPay = (obj) => {
    if (obj == null || obj == undefined) {
        class mockZaloPay{
            constructor() {
                this.isZaloPay = true;
            }
            showLoading() {}
            hideLoading() {}
        }

        let zalopay = new mockZaloPay();
        return zalopay;
    }
    return obj;
}