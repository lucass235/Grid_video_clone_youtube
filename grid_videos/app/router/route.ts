import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev');
    const data = await res.json();

    return NextResponse.json({data});
}

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    try {
        const videoData = request.body; // Supondo que os dados do vídeo são enviados no corpo da requisição
        console.log(request);
        console.log(response);
        
        const res = await fetch('https://lyer5izpf9.execute-api.us-east-1.amazonaws.com/dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoData),
        });

        if (!res.ok) {
            throw new Error(`Erro ao enviar dados: ${res.status}`);
        }

        const data = await res.json();

        response.status(200).json({ message: 'Vídeo adicionado com sucesso!', data });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erro interno no servidor' });
    }
}