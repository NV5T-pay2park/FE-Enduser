import * as Constant from '../config/config'

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
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `getTicketById?ticketId=${ticketID}`)
    if(!apiResponseData.ok){
        throw new Error("cannot get ticket info");
    }
    const ticketDataJSON = await apiResponseData.json()
    const ticketData = ticketDataJSON?.data
    if (ticketData === null || ticketData === undefined || ticketData === "") return []
    return ticketData
}