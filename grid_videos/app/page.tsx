"use client"
import CardMovie from "@/components/CardMovie";
import PopUp from "@/components/PopUp";
import { Dialog } from "@mui/material";
import React from "react";

const movies = [
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "/video/test_video.mp4",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "/video/test_video.mp4",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "/video/test_video.mp4",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "/video/test_video.mp4",
  },
];

export default function Home() {

  return (
    <main className=" p-24">
        <h1>Clone Youtube</h1>
      <div key={1} className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 mx-auto">
        {movies.map((movie, index ) => ( 
          <CardMovie key={index} thumb={movie.thumb} title={movie.title} src={movie.video} />
        ))}
        
      </div>
    </main>
  )
}
