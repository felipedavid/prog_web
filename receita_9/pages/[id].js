export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=f1cbc41e&i=${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "tt0095801" } },
      { params: { id: "tt0033152" } },
      { params: { id: "tt0015400" } },
      { params: { id: "tt0041149" } },
      { params: { id: "tt0044388" } },
      { params: { id: "tt0098746" } },
      { params: { id: "tt0046322" } },
      { params: { id: "tt0046497" } },
      { params: { id: "tt0044389" } },
    ],

    fallback: true,
  };
}

export default function TheMovie({ data }) {
  console.log(`Pré-renderizando ${data.Title}`);

  return (
    <div>
      <div>
        {data.Title} --- {data.Year}
      </div>

      <div>{data.Plot}</div>

      <div>
        <img src={data.Poster} width="300" height="400" />
      </div>
    </div>
  );
}
