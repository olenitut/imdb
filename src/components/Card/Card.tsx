import Link from "next/link";
import { IMovie } from "../Results/Results";
import Image from "next/image";

import { FiThumbsUp } from "react-icons/fi";

const Card = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-40 object-cover object-top"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{movie.overview}</p>
          <h2 className="truncate text-lg font-bold p-1">
            {movie.title || movie.name}
          </h2>
          <div className="flex items-center justify-between">
            {movie.release_date || movie.first_air_date}
            <div className="flex gap-2 items-center">
              <FiThumbsUp className="h-5 text-amber-600" />
              {movie.vote_count}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
