'use client'

import { useEffect, useState } from "react"

export function useTrafficTracker() {
    const [isWelcomeMessage, setIsWelcomeMessage] = useState<boolean>(false)
    
    useEffect(() => {

        const isFromPortfolio = document.referrer.includes('sonyoungjin.netlify.app/')

        if(isFromPortfolio){
            console.log('hi')    
            
            const wakeUpMungPass = async() => {
                try {
                    fetch('https://mungpass.vercel.app/', { method: 'GET', mode: 'no-cors' })
                    console.log("mungpass server warm-up completed")
                    const timer = setTimeout(() => {
                        setIsWelcomeMessage(true)
                    }, 1000)
                    
                    const autoClose = setTimeout(() => {
                        setIsWelcomeMessage(false)
                    }, 5000)
                    
                    return() => {
                        clearTimeout(timer)
                        clearTimeout(autoClose)
                    }
                } catch (error) {
                    console.error('error', error)
                }
            }
            
            wakeUpMungPass()
        }
        
    },[])

    return { isWelcomeMessage, setIsWelcomeMessage}
    
}