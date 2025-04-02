import React, { useState } from "react";

const VideoWithImageFrame = ({ imageSrc, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative videoFrames w-3/4 mx-auto">
      {!isPlaying ? (
        // Display image with play button
        <div className="relative">
          <img src={imageSrc} alt="Video Frame" className="w-full h-auto" />
          <button
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5,3 19,12 5,21 5,3" />
            </svg>
          </button>
        </div>
      ) : (
        // Display YouTube video embedded
        <div className="relative">
          <iframe
            width="100%"
            height="auto"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          />
        </div>
      )}
    </div>
  );
};

export default VideoWithImageFrame;
