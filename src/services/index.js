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

export const getZaloPayID = async () => {
    let zlpID = 2
    if (window.ZaloPay.isZaloPay) {
        const zlpIDJSON = await window.ZLP.User().getUserInfo()
        zlpID = zlpIDJSON.id
        // window.ZaloPay.showDialog({
        //     title: "Login Info: ",
        //     message: "status: " + JSON.stringify(zlpID),
        //     button: "OK"
        // }); 
    } else {
        zlpID = "aptx4869"
    }
    console.log("zalopay id: " + zlpID)

    return zlpID
}