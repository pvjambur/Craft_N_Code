import { YOLO } from 'ultralytics';

let model;

export const initializeModel = async () => {
  model = await YOLO.load('yolov8n.pt'); // Load YOLOv8 model
};

export const detectActions = async (videoSrc, updateWarnings) => {
  const video = document.createElement('video');
  video.src = videoSrc;

  return new Promise((resolve) => {
    video.addEventListener('loadeddata', async () => {
      await video.play();

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const warnings = [];

      const detectFrame = async () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const results = await model.predict(canvas); // Get predictions from YOLO

        context.clearRect(0, 0, canvas.width, canvas.height);
        results.forEach(result => {
          if (result.class === 'person') {
            // Draw bounding box
            context.beginPath();
            context.rect(result.x, result.y, result.width, result.height);
            context.lineWidth = 2;
            context.strokeStyle = 'red';
            context.stroke();

            // Add warning if an inappropriate action is detected
            const warning = `Person detected at (${result.x}, ${result.y})`;
            warnings.push(warning);
            updateWarnings(warning);
          }
        });

        if (!video.paused && !video.ended) {
          requestAnimationFrame(detectFrame);
        } else {
          resolve(warnings);
        }
      };

      detectFrame();
    });
  });
};
