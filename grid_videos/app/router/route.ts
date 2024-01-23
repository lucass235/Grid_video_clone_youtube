import Video from "@/model/Video";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const urlApi: string = "https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev";

export async function GET(request: Request) {
    const res = await fetch(urlApi);
    const data = await res.json();
    return NextResponse.json({data});
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
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

export async function PUT(request: NextApiRequest, response: NextApiResponse) {
    const body: any = await readRequestBody(request);
    
    const newBody = {
        title: body.title,
        userCreator: body.userCreator,
        description: body.description,
        thumbnail: body.thumbnail,
        videoUrl: body.videoUrl,
        duration: body.duration,
        views: body.views
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

export async function DELETE(request: NextApiRequest, response: NextApiResponse) {
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

// Função para ler e analisar o corpo da requisição
async function readRequestBody(request: NextApiRequest): Promise<Video> {
    const chunks = [];
    for await (const chunk of request.body) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf-8');
    return JSON.parse(body);
  }
