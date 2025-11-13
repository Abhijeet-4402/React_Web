import React from "react";

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex items-center bg-white/10 rounded-full p-1">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search memes..."
        aria-label="Search memes"
        className="
          px-4 py-3 rounded-l-full w-96
          bg-white/10 text-white placeholder-slate-300
          backdrop-blur-sm
          focus:outline-none focus:bg-white/20
          focus:ring-2 focus:ring-purple-500
          transition-colors duration-150
        "
      />
      <button
        type="submit"
        aria-label="Search"
        title="Search"
        className="
          p-3 rounded-r-full
          bg-white/10 hover:bg-white/20
          text-white flex items-center justify-center
          transition-colors duration-150
          shadow-none border-0 focus:outline-none focus:ring-0
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" className="w-5 h-5 text-white" fill="currentColor" aria-hidden="true">
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
