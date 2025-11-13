import React, { useEffect, useState } from "react";

function Apicalling() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { memes, loading };
}

export default Apicalling;
