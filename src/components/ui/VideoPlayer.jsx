import disLike from "../../assets/dislike.png";
import jack from "../../assets/jack.png";
import like from "../../assets/like.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import video1 from "../../assets/video.mp4";
import CommentsSection from "./CommentsSection";

function VideoPlayer() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="w-full overflow-hidden rounded-xl bg-black">
        <video src={video1} controls className="w-full aspect-video"></video>
      </div>

      <h1 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
        Best YouTube Channel to Learn Backend Development
      </h1>

      <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-600 text-sm">1,512 views • 2 days ago</p>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
            <img src={like} alt="like" className="w-5 h-5" />
            <span>120</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
            <img src={disLike} alt="dislike" className="w-5 h-5" />
            <span>2</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
            <img src={share} alt="share" className="w-5 h-5" />
            <span>Share</span>
          </button>

          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
            <img src={save} alt="save" className="w-5 h-5" />
            <span>Save</span>
          </button>
        </div>
      </div>

      <hr className="my-6" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={jack}
            alt="channel"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900">RedTube</h3>
            <p className="text-sm text-gray-500">1M subscribers</p>
          </div>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition">
          Subscribe
        </button>
      </div>

      <div className="mt-6 bg-gray-100 rounded-xl p-4">
        <p className="text-sm text-gray-700">
          Learn backend development from scratch. This video covers Node.js,
          Express.js, MongoDB, APIs, Authentication, and deployment tips for
          beginners.
        </p>
      </div>
      <CommentsSection />
    </div>
  );
}

export default VideoPlayer;
