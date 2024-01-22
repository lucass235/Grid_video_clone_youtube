import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev');
    const data = await res.json();

    return NextResponse.json({data});
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    const videoData = request.body;
    const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev', {
        method: 'POST',
        body: JSON.stringify(videoData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({data});
}

export async function PUT(request: Request, response: NextApiResponse) {
    console.log("request", request);
    console.log("response", response);
    
    
    const videoData = request.body;
    const res = await fetch(`https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev?id=${""}`, {
        method: 'PUT',
        body: JSON.stringify(videoData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({data});
}