import * as Constant from '../config/config'
import { faker } from '@faker-js/faker';

const mockData = {
    "status": "OK",
    "message": "Success",
    "data": {
        "userID": 5,
    }
}

export const requestLogin = async (zlpID) => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const url = Constant.SERVER_BASE_URL + `/api/loginenduser?zlpId=${zlpID}&firstName=${firstName}&lastName=${lastName}`
    const apiResponseData = await fetch(url)
    if(!apiResponseData.ok){
        const message = `No payment data`;
        // throw new Error(message);
        return {
            "userID": 5,
        }
    }
    const loginDataJSON = await apiResponseData.json()
    const loginData = loginDataJSON.data
    return loginData
}