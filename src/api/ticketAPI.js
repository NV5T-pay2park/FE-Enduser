import * as Constant from '../config/config'

const mockTicket = {
    "ticketID": 15,
    "checkInTime": "2022-07-18T14:27:48Z",
    "checkOutTime": null,
    "amount": 3000,
    "licensePlate": "77C1-27549",
    "vehicleType": "Xe máy",
    "endUserID": 6,
    "endUserName": "TheeeHman Smifter",
    "parkingLotID": 4,
    "parkingLotName": "Ngô Quyền",
    "status": true
}

export const getTicketByEndUserId = async (id) => {
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=${id}`)
    if(!apiResponseData.ok){
        return []
    }
    const ticketListDataJSON = await apiResponseData.json()
    const ticketsData = ticketListDataJSON?.data
    if (ticketsData === undefined || ticketsData === "") return []
    return ticketsData
}

export const getTicketByID = async (ticketID) => {
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `/api/getTicketById?ticketId=${ticketID}`)
    window.ZaloPay.showDialog({
        title: "Thanh toán",
        message: `API respons id: ${ticketID} -- ` + JSON.stringify(apiResponseData),
        button: "OK"
      });
    if(!apiResponseData.ok){
        throw new Error("cannot get ticket info");
    }
    const ticketDataJSON = await apiResponseData.json()
    const ticketData = ticketDataJSON?.data
    if (ticketData === null || ticketData === undefined || ticketData === "") return mockTicket
    return ticketData
}