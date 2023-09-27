import React from "react";
import Card from "../Card/Card";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}

const Results = ({ results }: { results: IMovie[] }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((el: IMovie) => (
        <Card movie={el} key={el.id} />
      ))}
    </div>
  );
};

export default Results;
