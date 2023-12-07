import React from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video.mp4";

const MainVideoCard = () => {
  const data = {
    title: "The Best Video Game of 2019",
    isVerified: true,
    profilePhoto:
      "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg",
    channel: "Musics",
    thumbnail:
      "https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "3:01",
    views: "5,467,897",
    date: "05-11-2023",
  };
  return (
    <div className="border-2 border-red-600">
      <ReactPlayer controls url={video} />
    </div>
  );
};

export default MainVideoCard;
