export async function getServerSideProps(context) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=2f9b03c7&s=${context.query.search}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Movies({ data }) {
  return (
    <div>
      <div>
        <form method="GET">
          <input name="search"></input>
          <input type="submit"></input>
        </form>
        {data.Search.map((m) => (
          <div>
            {m.Title} - {m.Year}
            <br />
            <img src={m.Poster} />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
