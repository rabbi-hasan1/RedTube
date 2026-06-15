function RecommendedVideoCard({ thumbnail, title, channel, views, uploaded }) {
  return (
    <div className="flex gap-3 cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="w-44 h-24 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>

        <p className="text-xs text-gray-500 mt-1">{channel}</p>

        <p className="text-xs text-gray-500">
          {views} views • {uploaded}
        </p>
      </div>
    </div>
  );
}

export default RecommendedVideoCard;
