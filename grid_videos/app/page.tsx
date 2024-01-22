"use client";
import React, { useState, useEffect } from 'react';
import CardMovie from "@/components/CardMovie";
import Video from "@/model/Video";
import { Typography } from "@mui/material";
import axios from "axios";
import VideoForm from '@/components/VideoForm';

async function getVideos(): Promise<Video[]> {
	try {
		const response = await axios.get('http://localhost:3000/router', { params:  [1,2,3] });
		return response.data.data; 
	} catch (error) {
		console.error("Erro ao obter vídeos:", error);
		throw error; 
	}
}

async function postVideo(video: Video) {
	try {
		const response = await axios.post('http://localhost:3000/router', video);
        return response.data
    } catch (error) {
        throw error;
    }
}

async function putVideo(video: Video) {
	try {
		const response = await axios.put('http://localhost:3000/router', video);
		return response.data
	} catch (error) {
		throw error;
	}
}

function handlerVideo(video: Video, isEdit?: boolean) {                      
	let res = null;
	try {
		isEdit ? res = putVideo(video) : res = postVideo(video);
	} catch (error) {
		console.error("Erro ao adicionar vídeo:", error);
	}
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
	
	return (
		<main className="p-24">
			<div className="flex items-center justify-center">
				<Typography variant="h2">Clone YouTube</Typography>
			</div>
			<div key={1}
				className="grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto">
				{/* ordena por titulo */}
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

