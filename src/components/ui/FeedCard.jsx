import { Link } from "react-router-dom";
import thumbnail1 from "../../assets/thumbnail1.png";

function FeedCard() {
  return (
    <div className="w-full max-w-sm">
      <Link to="video/111/11">
        <img
          src={thumbnail1}
          alt="thumbnail"
          className="w-full rounded-lg object-cover"
        />

        <h2 className="mt-3 text-lg font-semibold line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsam beatae ipsa voluptatibus
        </h2>
      </Link>
      <h3 className="mt-2 text-sm font-medium text-gray-700">GreatStack</h3>

      <p className="text-sm text-gray-500">15K views &bull; 2 days ago</p>
    </div>
  );
}

export default FeedCard;
