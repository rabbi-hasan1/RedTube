import { useState } from "react";
import jack from "../../assets/jack.png";
import CommentCard from "./CommentCard";

function CommentsSection() {
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      avatar: jack,
      name: "John Doe",
      time: "2 hours ago",
      comment:
        "This backend tutorial is amazing. Everything is explained clearly.",
      likes: 24,
    },
    {
      avatar: jack,
      name: "Sarah Khan",
      time: "1 day ago",
      comment: "I finally understood Express middleware after watching this.",
      likes: 17,
    },
    {
      avatar: jack,
      name: "Alex Smith",
      time: "3 days ago",
      comment:
        "Please make a video about authentication using JWT and cookies.",
      likes: 9,
    },
  ]);

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      avatar: jack,
      name: "You",
      time: "Just now",
      comment,
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-6">{comments.length} Comments</h2>

      <div className="flex gap-3 mb-8">
        <img src={jack} alt="user" className="w-10 h-10 rounded-full" />

        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
          />

          <div className="flex justify-end gap-3 mt-3">
            <button
              onClick={() => setComment("")}
              className="px-4 py-2 rounded-full hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleAddComment}
              className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Comment
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((item, index) => (
          <CommentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CommentsSection;
