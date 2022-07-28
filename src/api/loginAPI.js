import * as Constant from '../config/config'

const mockData = {
    "status": "OK",
    "message": "Success",
    "data": {
        "userID": 5,
    }
}

export const requestLogin = async (zlpID) => {
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `/api/loginenduser?zlpId=${zlpID}`)
    console.log(apiResponseData)
    if(!apiResponseData.ok){
        const message = `No payment data`;
        // throw new Error(message);
        return {
            "userID": 5,
        }
    }
    const loginDataJSON = await apiResponseData.json()
    console.log(loginDataJSON)
    const loginData = loginDataJSON.data
    return loginData
}