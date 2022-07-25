import * as Constant from '../config/config'

export const getTicketByEndUserId = async (id) => {
    const apiResponseData = await fetch(Constant.SERVER_BASE_URL + `/api/getTicketByEndUserId?endUserID=${id}`)
    const ticketListDataJSON = await apiResponseData.json()
    return ticketListDataJSON
}