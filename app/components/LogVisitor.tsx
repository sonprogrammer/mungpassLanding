'use client'

import { useEffect } from "react"

export function LogVisitor() {
    useEffect(() => {
        const logArrival = async() => {
            await fetch('/api/log', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    channel: 'visitor',
                    event: '랜딩페이지 접속',
                    description: `방문자 유입경로: ${document.referrer || '직접입력 후들옴'}`,
                    icon: "🐾"
                })
            })
        }

        logArrival()
    },[])

    return null
    
}