import * as Constant from '../config/config'


export const requestCheckIn = async (userID, parkingLotID) => {
    const url = Constant.SERVER_BASE_URL + '/api/checkIn'
    const bodyContent = {
        "endUserID": userID,
        "parkingLotID": parkingLotID
    }

    const response = await fetch(
		url,
        {
			method: 'POST',
			headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(bodyContent),
		}
	);
	const data = await response.json();
    return data
}