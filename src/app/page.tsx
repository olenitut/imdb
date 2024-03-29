import Results from "@/components/Results/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: { filter?: string };
}) {
  const filter = searchParams.filter || "trending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      filter === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
