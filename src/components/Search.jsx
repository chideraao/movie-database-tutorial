import React from "react";

function Search({ handleChange, search }) {
	return (
		<section className="searchbox-wrap">
			<input
				type="text"
				className="searchbox"
				placeholder="Search for a movie..."
				onChange={handleChange}
				name="search"
				onKeyPress={search}
			/>
		</section>
	);
}

export default Search;
