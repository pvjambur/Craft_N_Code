import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { initializeModel, detectActions } from '../utils/actionRecognition';

const CCTVTracking = () => {
  const [warnings, setWarnings] = useState([]);
  const [attentionMessage, setAttentionMessage] = useState('No actions detected');
  const videoSources = ['/videos/video1.mp4']; // Make sure this path is correct

  useEffect(() => {
    const loadModelAndDetect = async () => {
      await initializeModel(); // Load your model
      const allWarnings = [];

      for (const videoSrc of videoSources) {
        const videoWarnings = await detectActions(videoSrc, updateWarnings);
        allWarnings.push(...videoWarnings);
      }

      setWarnings(allWarnings);
      setAttentionMessage(allWarnings.length > 0 ? 'Attention: Action detected!' : 'No actions detected');
    };

    const updateWarnings = (newWarning) => {
      setWarnings((prevWarnings) => [...prevWarnings, newWarning]);
    };

    loadModelAndDetect();
  }, []);

  return (
    <div className="cctv-tracking">
      <h1>CCTV Tracking</h1>
      <div className="attention-box">{attentionMessage}</div>
      <div className="video-container">
        {videoSources.map((src, index) => (
          <VideoPlayer key={index} videoSrc={src} />
        ))}
      </div>
      <div className="warnings">
        <h2>Warnings</h2>
        <ul>
          {warnings.length > 0 ? (
            warnings.map((warning, index) => <li key={index}>{warning}</li>)
          ) : (
            <li>No inappropriate actions detected.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CCTVTracking;
