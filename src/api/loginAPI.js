import * as Constant from '../config/config'

export const requestLogin = async (zlpID) => {
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `/api/loginenduser?zlpId=${zlpID}`)
    console.log(apiResponseData)
    if(!apiResponseData.ok){
        const message = `No payment data`;
        throw new Error(message);
    }
    const loginDataJSON = await apiResponseData.json()
    console.log(loginDataJSON)
    const loginData = loginDataJSON.data
    return loginData
}