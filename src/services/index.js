console.log("hello Toan")

export const formatDateTime = (datetime) => {
    if (datetime !== undefined) {
        let dt1 = datetime.replace(/-/g, "/")
        let dtWithoutSecond = dt1.substring(0, dt1.length - 4)
        let dtRemoveDummyCharacter = dtWithoutSecond.replace("T", " ")
        return dtRemoveDummyCharacter
    }
    return "2022/07/18 14:27"
}

export const getCheckedNullList = (list) => {
    if (!list?.length || list?.length <= 0) {
        return [];
    }
    return list
}

export const getZaloPayID = () => {
    let zlpID
    if (window.ZaloPay.isZaloPay) {
        zlpID = window.ZLP.User().getUserInfo().then(value => { 
            return value.id
        })
    } else {
        zlpID = "aptx4869"
    }
    console.log("zalopay id: " + zlpID)
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

export const getIndexOfListLocation = (lst, idx) => {
    if (idx >= lst.length) {
        return checkIfLocationNull(null);
    }
    return lst[idx];
}