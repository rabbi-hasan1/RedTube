import disLike from "../../assets/dislike.png";
import like from "../../assets/like.png";
function CommentCard({ avatar, name, time, comment, likes }) {
  return (
    <div className="flex gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{name}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        <p className="mt-1 text-sm">{comment}</p>

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <button className="flex flex-row gap-2 cursor-pointer">
            <img src={like} className="w-6" /> <p>{likes}</p>
          </button>
          <button>
            <img src={disLike} className="w-6" alt="" />
          </button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
