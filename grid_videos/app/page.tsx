"use client";
import React, { useState, useEffect } from 'react';
import CardMovie from "@/components/CardMovie";
import Video from "@/model/Video";
import { Typography } from "@mui/material";
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
	
	return res;
}

export default function Home() {

	const [videos, setVideos] = useState<Video[]>([]);

	function sortVideos(a: Video, b: Video) {
		// ordenar por titulo
		if (a.title < b.title) return -1;
		if (a.title > b.title) return 1;
		return 0;
	}

 
	useEffect(() => {
		getVideos().then((data) => setVideos(data));
		
	}, []);
	
	console.log(videos);
	return (
		<main className="p-24">
			<div className="flex items-center justify-center">
				<Typography variant="h2">Clone YouTube</Typography>
			</div>
			<div key={1}
				className="grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto place-items-center">
				{videos.sort(sortVideos).map((video) => (
					<CardMovie key={video.id} dataVideo={video} onSave={handlerVideo} />
				))}
			</div>
			<div className='flex items-center justify-center mt-5'>
				<VideoForm  onSave={handlerVideo}/>
			</div>
		</main>
  	);
}

