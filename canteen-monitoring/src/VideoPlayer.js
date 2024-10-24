import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc }) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    const draw = () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Here you can overlay bounding boxes if you have detection data
    };

    video.addEventListener('play', () => {
      const drawFrame = () => {
        if (!video.paused && !video.ended) {
          draw();
          requestAnimationFrame(drawFrame);
        }
      };
      drawFrame();
    });

    return () => {
      video.removeEventListener('play', drawFrame);
    };
  }, []);

  return (
    <div className="video-player" style={{ position: 'relative' }}>
      <video ref={videoRef} width="640" height="360" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <canvas
        ref={canvasRef}
        width="640"
        height="360"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default VideoPlayer;
