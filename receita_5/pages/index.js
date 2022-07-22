import Link from "next/link";
import useSWR from "swr";

export default function Movies2(context) {
  const { data } = useSWR(
    `http://www.omdbapi.com/?apikey=2f9b03c7&s=naruto`,
    fetcher
  );

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {data.Search.map((m) => (
        <div>
          <a href={`https://www.imdb.com/title/${m.imdbID}`}>{m.Title} --- {m.Year}</a>
        </div>
      ))}
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
