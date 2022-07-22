import useSWR from "swr";
import { useState } from "react";

async function theFetcher(url) {
	if (url === null || url === "") return { Search: "" };
	const res = await fetch(url);
	const json = await res.json();
	return json;
}

export function TheMovies({ data, show }) {
	if (!show) return <div></div>;

	if (data.error) return <div>falha na requisição</div>;

	if (data.Search === "") return <div>carregando...</div>;

	return (
		<div>
			{data.Search.map((m) => (
				<div>
					<a href={`https://www.imdb.com/title/${m.imdbID}`}>
						{m.Title} --- {m.Year}
					</a>
				</div>
			))}
		</div>
	);
}

export function TheLink({ url, handler }) {
	return (
		<div>
			<a href="/movies3.js" onClick={handler}>
				{" "}
				{url === "" ? "Mostrar" : "Ocultar"}{" "}
			</a>
		</div>
	);
}

export default function Movies3() {
	const [url, setUrl] = useState("");
	const { data, error } = useSWR(url, theFetcher);

	const onClickHandler = (e) => {
		e.preventDefault();

		const search = document.getElementById('search-field').value
		if (url === "") setUrl(`http://www.omdbapi.com/?apikey=2f9b03c7&s=${search}`);
		else setUrl("");
	};

	return (
		<div>
			<form>
				<input id="search-field" type="text"></input>
				<button type="submit" onClick={onClickHandler}>
					Buscar
				</button>
			</form>
			<TheLink url={url} handler={onClickHandler} />
			<TheMovies
				data={
					error ? { error: "Erro na pesquisa" } : data ? data : { Search: "" }
				}
				show={url !== ""}
			/>
		</div>
	);
}
