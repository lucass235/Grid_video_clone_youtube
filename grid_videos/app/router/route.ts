import Video from "@/model/Video";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev');
    const data = await res.json();

    return NextResponse.json({data});
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    const videoData: Video = {
        id: "5",
        title: "titulo teste",
        userCreator: "user teste",
        description: "description teste",
        thumbnail: "/img/thumb_test.webp",
        videoUrl: "/video/test_video.mp4",
        duration: 0,
        views: 0
    };
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
    
    const videoData: Video = {
        id: "5",
        title: "titulo teste lucas",
        userCreator: "user teste",
        description: "description teste",
        thumbnail: "/img/thumb_test.webp",
        videoUrl: "/video/test_video.mp4",
        duration: 0,
        views: 0
    };
    const res = await fetch(`https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev?id=${videoData.id}`, {
        method: 'PUT',
        body: JSON.stringify(videoData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({data});
}

export async function DELETE(request: Request, response: NextApiResponse) {
    const videoId = "5";
    const res = await fetch(`https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev?id=${videoId}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    return NextResponse.json({ data });
}
