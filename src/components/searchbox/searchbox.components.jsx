import React from "react";
import "./searchbox.styles.css";

const SearchBox = ({ placeholder, onSearchChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={onSearchChange}
        />
    );
};

export default SearchBox;
