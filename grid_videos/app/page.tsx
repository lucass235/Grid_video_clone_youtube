"use client";
import CardMovie from "@/components/CardMovie";
import Video from "@/model/Video";
import { Typography } from "@mui/material";
import axios from "axios";
import React from "react";

// const videos: Video[] = [
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: Lucas Santos,
//     userCreator: "Lucas Santos",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 2000,
//     userCreator: "Lucas Santos",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 13400,
//     userCreator: "Roberto Silva",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 500,
//     userCreator: "GameeEddu",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 5500,
//     userCreator: "Canaltch",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 5600,
//     userCreator: "Tectudo",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 8000,
//     userCreator: "Felps",
//   },
//   {
//     title: "A volta dos que não foram",
//     thumbnail: "/img/thumb_test.webp",
//     videoUrl: "/video/test_video.mp4",
//     description: "Aprenda a ganhar dinheiro com a internet",
//     views: 1000,
//     userCreator: "Livia",
//   },
// ];

export default async function Home() {

  const { data } = await axios.get('http://localhost:3000/router')
  
  const videos: Video[] = data.data

	console.log(videos);
	
  return (
    <main className=" p-24">
      	<div className="flex items-center justify-center">
        	<Typography variant="h2">Clone YouTube</Typography>
      	</div>
      	<div key={1}
        	className="grid grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        	{videos.map((video, index) => (
          		<CardMovie key={index} dataVideo={video} />
        	))}
      </div>
    </main>
  );
}
