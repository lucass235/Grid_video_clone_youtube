import Video from "@/model/Video";
import { NextApiRequest} from "next";
import { NextRequest, NextResponse } from "next/server";

const urlApi: string = "https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev";

export async function GET(request: Request) {
    const res = await fetch(urlApi);
    const data = await res.json();
    return NextResponse.json({data});
}

export async function POST(request: NextRequest | Request) {
    const body: Video = await readRequestBody(request);
    let res = null;
    try {
        res = await fetch(urlApi, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        throw error;
    }
    const data = await res.json();

    return NextResponse.json({data});
}

export async function PUT(request: NextRequest | Request) {
    const body: any = await readRequestBody(request);
    
    const newBody = {
        title: body.title,
        userCreator: body.userCreator,
        description: body.description,
        thumbnail: body.thumbnail,
        videoUrl: body.videoUrl,
        durationVideo: body.durationVideo,
        viewsVideo: body.viewsVideo
    }
    const res = await fetch(`${urlApi}?id=${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(newBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({data});
}

export async function DELETE(request: NextRequest | Request) {
    const body: any = await readRequestBody(request);
    const res = await fetch(`${urlApi}?id=${body.id}`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return NextResponse.json({ data });
}

async function readRequestBody(request: NextApiRequest | Request): Promise<Video> {
    const chunks = [];
    for await (const chunk of request.body) {
        chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf-8');

    return JSON.parse(body);
  }
