import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MemeList from "./MemeList";
import ApiCalling from "./Apicalling";

function Body() {
  const { memes, loading } = ApiCalling();
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(memes);
  }, [memes]);

  const handleSearch = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = memes.filter((meme) =>
      meme.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        Loading memes...
      </div>
    );
  }

  return ( 
      <div className="min-h-screen flex flex-col">
        <h1 className="text-5xl font-bold text-white text-center pt-16 mb-8">
          Meme Search
        </h1>

        <div className="flex justify-center mb-12">
          <SearchBar value={text} onChange={handleSearch} onSubmit={handleSubmit} />
        </div>

        <MemeList list={filtered} />
      </div>
  );
}

export default Body;
