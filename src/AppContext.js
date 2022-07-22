import { useState, createContext, useEffect, useLayoutEffect } from "react";

const AppContext = createContext()

function AppProvider({children}) {

    const [ticketList, setTicketList] = useState([])
    const [userInfo, setUserInfo] = useState({})

    const insertTicket = (ticket) => {
        // setTicketList(prevList => [ticket, prevList])
        setTicketList(prevList => [ticket].concat(prevList))
    }

    const value = {
        ticketList,
        setTicketList,
        insertTicket,
        userInfo,
        setUserInfo,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}