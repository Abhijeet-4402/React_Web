const MemeCard = ({ img, title }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <img src={img} alt={title} className="w-full h-52 object-cover" />

      <div className="bg-purple-600 text-white text-center py-3 font-semibold">
        {title}
      </div>
    </div>
  );
};

export default MemeCard;
