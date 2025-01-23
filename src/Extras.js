import React, { useState } from 'react';

const Extras = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleVideoClick = (e) => {
    e.stopPropagation();  // Prevents click propagation to the container
    const video = e.target;
    if (isPlaying) {
      video.pause();
      console.log('Video paused');
    } else {
      video.play().then(() => {
        console.log('Video playing');
      }).catch((error) => {
        console.error('Error playing video:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container">
      <main className="extras">
        <section id="snoopy">
          <p>"we only live once snoopy." <br></br>"wrong. we only die once. we live everyday!" <br></br>- Charlie Brown</p>
          <p>learn from snoopy how to live and love life ! (click to pause and play)</p>
          <div className="video-container">
            <video
              id="myVideo"
              poster="/poster.png"
              onClick={handleVideoClick}
              style={{ width: '100%', height: 'auto' }} // Ensures the video is fully visible
            >
              <source src="/snoopy_grwm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`show-more-content ${showMore ? 'show' : ''}`}>
            <p>
              Additional content goes here. You can add more details about yourself, your interests, or anything else you want to share.
            </p>
          </div>
          <button onClick={handleReadMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </section>
      </main>
    </div>
  );
};

export default Extras;