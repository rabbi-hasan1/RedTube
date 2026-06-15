import RecommendedSidebar from "../components/ui/RecommendedSidebar";
import VideoPlayer from "../components/ui/VideoPlayer";
const Videos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer />
        </div>
        <div>
          <RecommendedSidebar />
        </div>
      </div>
    </div>
  );
};

export default Videos;
