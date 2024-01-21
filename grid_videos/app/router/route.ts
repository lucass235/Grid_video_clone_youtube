import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev');
    const data = await res.json();

    return NextResponse.json({data});
}