import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { event, description, icon, channel} = await req.json()

        const res = await fetch('https://api.logsnag.com/v1/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.LOGSNAG_TOKEN}`
            },
            body: JSON.stringify({
                project: process.env.LOGSNAG_PROJECT,
                channel: 'visitor',
                event: event,
                description: description,
                icon: icon,
                notify: true
            })
        })

        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({success: false}, {status: 500})
    }
}