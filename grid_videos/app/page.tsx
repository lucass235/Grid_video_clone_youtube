"use client";
import React, { useState, useEffect } from 'react';
import CardMovie from "@/components/CardMovie";
import Video from "@/model/Video";
import { CircularProgress, Typography } from "@mui/material";
import VideoForm from '@/components/VideoForm';
import { getVideos, postVideo, putVideo } from '@/src/api/videoHttp';


async function handlerVideo(video: Video, isEdit?: boolean) {
    let res = null;
    try {
        isEdit ? res = await putVideo(video) : res = await postVideo(video);
    } catch (error) {
        console.error("Erro", error);
    }

    alert(res?.data.data);
    window.location.reload();
    return res;
}

export default function Home() {

    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    function sortVideos(a: Video, b: Video) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }


    useEffect(() => {
        setLoading(true);
        getVideos().then((data) => {
            setVideos(data)
            setLoading(false);
        });

    }, [handlerVideo]);

    return (<>
        {loading ?
            <div className='flex justify-center items-center h-screen'>
                <CircularProgress size={100} style={{ color: '#1DA1F2' }} />
            </div> :
            <main className="p-8 md:p-24"> 
                <div className="flex items-center justify-center">
                    <Typography variant="h2" style={{ fontWeight: 600, color: 'white'}}>Clone YouTube</Typography>
                </div>
                <div key={1}
                    className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto place-items-center mt-8">
                    {videos.sort(sortVideos).map((video) => (
                        <CardMovie key={video.id} dataVideo={video} onSave={handlerVideo} />
                    ))}
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <VideoForm onSave={handlerVideo} />
                </div>
            </main>
        }
    </>);
}

