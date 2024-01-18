import CardMovie from "@/components/CardMovie";
import PopUp from "@/components/PopUp";
import { Dialog } from "@mui/material";

const movies = [
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "https://www.youtube.com/watch?v=7Qp5vcuMIlk",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "https://www.youtube.com/watch?v=7Qp5vcuMIlk",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "https://www.youtube.com/watch?v=7Qp5vcuMIlk",
  },
  {
    title: "A volta dos que não foram",
    thumb: "https://placehold.it/300x200",
    video: "https://www.youtube.com/watch?v=7Qp5vcuMIlk",
  },
];

export default function Home() {
  return (
    <main className=" p-24">
        <h1>Clone Youtube</h1>
      <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto">
        {movies.map((movie) => ( 
          <>
          <CardMovie />
          <PopUp />
          </>
        ))}
      </div>
    </main>
  )
}
