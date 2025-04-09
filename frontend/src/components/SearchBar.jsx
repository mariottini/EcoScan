import { useState } from "react";

function SearchBar({ onSearch }) {
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		if (!query.trim()) return;
		onSearch(query);
	};

	return (
		<input
			className="searchbar"
			type="text"
			placeholder="Cerca.."
			value={query}
			onChange={(e) => {
				setQuery(e.target.value);
				// handleSearch();
			}}
			onKeyDown={(e) => e.key === "Enter" && handleSearch()}
		/>
	);
}

export default SearchBar;
