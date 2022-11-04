import React, { useState, useEffect } from 'react'
const Context = React.createContext()


function ContextProvider(props) {
    const url = "http://localhost:7070/"
    
    const [isLogin, setIsLogin] = useState(
        () => JSON.parse(localStorage.getItem("login")) || false
    )
    const [profile, setProfile] = useState(
        () => JSON.parse(localStorage.getItem("profile")) || []
    )

    useEffect(() => {
        localStorage.setItem("profile", JSON.stringify(profile))
    }, [profile])

    useEffect(() => {
        localStorage.setItem("login", JSON.stringify(isLogin))
    }, [isLogin])
    
    async function login(userLogin){
        const options = {
            method: "POST",
            body: JSON.stringify(userLogin),
            headers: {"Content-Type": "application/json"}
        }
        const res = await fetch (`${url}auth`, options)
        if (!res.ok) {
            throw new Error(res.status)
        }
        let privateInfo = []
        privateData('private/me').then(me => privateInfo.push(me))
        privateData('private/news').then(news => privateInfo.push(news))
        setIsLogin(true)
        setProfile(privateInfo)
    }

    async function privateData (appex){
        const res = await fetch(`${url}${appex}`)
        if (!res) throw new Error (res.status)
        const data = await res.json()
        return data
    }

    function unlog(){
        setIsLogin(false)
    }

    return (
        <Context.Provider value = {{isLogin, login, profile, unlog}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}