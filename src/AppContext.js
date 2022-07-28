import { useState, createContext, useEffect, useLayoutEffect } from "react";
import * as LoginAPI from './api/loginAPI'


const AppContext = createContext()

function AppProvider({children}) {

    const [ticketList, setTicketList] = useState([])
    const [userInfo, setUserInfo] = useState({
        zlpId: "abcxyz",
        id: null,
    })

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

    const getUserZLPInfo2 = () => {
        window.ZLP.User().getUserInfo().then(value => { 
          setUserInfo(value)
        })
    
        // console.log("call ZLP.getUserInfo()2")
    }
    const getUserInfo = async () => {
        if (window.ZaloPay.isZaloPay) {
            window.ZLP.User().getUserInfo().then(async (value) => { 
                const info = {
                    zlpId: value.id,
                    zlpAccessToken: value.access_token,
                }
                const zlpId = value.id
                if (zlpId !== undefined && zlpId !== "") {
                    try {
                        const loginResponse = await LoginAPI.requestLogin(zlpId)
                        if (loginResponse.userId !== undefined || loginResponse.userId != "" || loginResponse.userId !== null) {
                            setUserInfo({
                                zlpId: zlpId,
                                id: loginResponse.userId
                            })
                        } 
                    } catch (err) {
                        setUserInfo({
                            zlpId: zlpId,
                            id: 1,
                        })
                    }
                    
                }
                

            })
        } else {
            setUserInfo({
                zlpId: "abcxyz",
                id: 3,
            })
        }
        console.log("zlpID: " + userInfo.id)
    }
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}