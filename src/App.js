import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Popup from "./components/Popup";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
	const [state, setState] = useState({
		search: "",
		results: [],
		selected: {},
	});

	const search = (e) => {
		if (e.key === "Enter") {
			Axios.get(
				"http://www.omdbapi.com/?i=tt3896198&apikey=1d7fd153&s=" + state.search
			).then((res) =>
				setState((prevState) => {
					return { ...prevState, results: res.data.Search };
				})
			);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
	const openPopup = (id) => {
		Axios.get(
			"http://www.omdbapi.com/?i=tt3896198&apikey=1d7fd153&i=" + id
		).then((res) =>
			setState((prevState) => {
				return { ...prevState, selected: res.data };
			})
		);
	};

	const closePopup = () => {
		setState((prevState) => {
			return { ...prevState, selected: {} };
		});
	};

	return (
		<div className="App">
			<header>
				<h1>Movie Database</h1>
			</header>
			<main>
				<Search handleChange={handleChange} search={search} />
				<Results results={state.results} openPopup={openPopup} />

				{typeof state.selected.Title != "undefined" ? (
					<Popup selected={state.selected} closePopup={closePopup} />
				) : (
					false
				)}
			</main>
		</div>
	);
}

export default App;
