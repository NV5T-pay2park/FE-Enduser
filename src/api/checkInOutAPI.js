import * as Constant from '../config/config'


export const requestCheckIn = async (userID, parkingLotID) => {
    const url = Constant.SERVER_BASE_URL + '/api/checkIn'
    const bodyContent = {
        "endUserID": userID,
        "parkingLotID": parkingLotID
    }

    const response = await fetch(
		url, {
			method: 'POST',
			headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyContent),
		});
    const data = await response.json();
    return data
}

export const getCheckoutPaymentData = async (userID, ticketID) => {
    const url = Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=${userID}&ticketId=${ticketID}`
    const checkoutResponse = await fetch(url);
    const checkoutResult = await checkoutResponse.json()
    return checkoutResult
}