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

function handlerVideo(video: Video) {
	// console.log(video);
	let res = null;
	try {
		res = putVideo(video);
	} catch (error) {
		console.error("Erro ao adicionar vídeo:", error);
	}
	console.log(res);
	
	return res;
}

export default function Home() {

	const [videos, setVideos] = useState<Video[]>([]);
 
	useEffect(() => {
		getVideos().then((data) => setVideos(data));
	}, []);
	
	return (
		<main className=" p-24">
			<div className="flex items-center justify-center">
				<Typography variant="h2">Clone YouTube</Typography>
			</div>
			<div key={1}
				className="grid grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
				{videos.map((video, index) => (
					<CardMovie key={index} dataVideo={video} onSave={handlerVideo} />
				))}
			</div>
			<div className='flex items-center justify-center mt-5'>
				<VideoForm  onSave={handlerVideo}/>
			</div>
		</main>
  	);
}

