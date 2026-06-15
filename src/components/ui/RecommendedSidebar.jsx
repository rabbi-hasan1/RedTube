import RecommendedVideoCard from "./RecomendedVideoCard";

import thumb2 from "../../assets/thumbnail1.png";
import thumb3 from "../../assets/thumbnail2.png";
import thumb4 from "../../assets/thumbnail3.png";
import thumb1 from "../../assets/thumbnail4.png";

function RecommendedSidebar() {
  const videos = [
    {
      thumbnail: thumb1,
      title: "Learn Node.js Backend Development Full Course",
      channel: "Code Academy",
      views: "150K",
      uploaded: "3 weeks ago",
    },
    {
      thumbnail: thumb2,
      title: "Build REST APIs with Express.js",
      channel: "Programming Hub",
      views: "98K",
      uploaded: "1 month ago",
    },
    {
      thumbnail: thumb3,
      title: "MongoDB Crash Course for Beginners",
      channel: "Dev World",
      views: "210K",
      uploaded: "2 weeks ago",
    },
    {
      thumbnail: thumb4,
      title: "JWT Authentication Explained",
      channel: "Code Master",
      views: "75K",
      uploaded: "5 days ago",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {videos.map((video, index) => (
        <RecommendedVideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default RecommendedSidebar;
