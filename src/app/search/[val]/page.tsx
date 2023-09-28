import Results from "@/components/Results/Results";

const page = async ({ params }: { params: { val: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.val}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {movies?.length && <Results results={movies} />}
    </div>
  );
};

export default page;
