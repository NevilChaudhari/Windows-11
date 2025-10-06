import React, { useState, useRef } from "react";

function Chrome() {
    const [query, setQuery] = React.useState('');

    const handleSearch = () => {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, '_blank');
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Google..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Chrome;