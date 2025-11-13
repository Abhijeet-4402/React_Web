import React from "react";

function MemeList({ list }) {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {list.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No memes found 😢</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((meme) => (
              <div
                key={meme.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden bg-gray-200 h-64">
                  <img
                    src={meme.url}
                    alt={meme.name}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 truncate group-hover:text-purple-600 transition-colors duration-300">
                    {meme.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MemeList;
