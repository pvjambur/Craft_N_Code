import cv2

def process_video(input_video_path, output_video_path):
    # Initialize the HOG descriptor/person detector
    hog = cv2.HOGDescriptor()
    hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

    # Open the input video file
    cap = cv2.VideoCapture(input_video_path)

    # Check if the video opened successfully
    if not cap.isOpened():
        print(f"Error: Unable to open video file {input_video_path}")
        return

    # Get video properties (frame width, height, and frames per second)
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = int(cap.get(cv2.CAP_PROP_FPS))

    # Define the codec and create VideoWriter object to save the processed video
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Codec for .mp4 format
    out = cv2.VideoWriter(output_video_path, fourcc, fps, (640, 360))

    # Process the video frame by frame
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        # Resize frame for faster processing (optional)
        frame_resized = cv2.resize(frame, (640, 360))

        # Detect people in the frame
        (rects, weights) = hog.detectMultiScale(frame_resized, winStride=(8, 8), padding=(8, 8), scale=1.05)

        # Draw bounding boxes on the detected humans
        for (x, y, w, h) in rects:
            cv2.rectangle(frame_resized, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Write the processed frame to the output video file
        out.write(frame_resized)

        # Display the frame with bounding boxes in a separate window (optional)
        cv2.imshow('Processed Video', frame_resized)

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release video object and video writer
    cap.release()
    out.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    # Input video path
    input_video = r"C:\Users\jambu\Downloads\Kitchen Security Camera sample.mp4"
    # Output video path
    output_video = r"D:\2nd Year\GitHub\Craft_N_Code\canteen-monitoring\public\videos\processed_video1.mp4"

    # Call the function to process the video and save it
    process_video(input_video, output_video)

    print(f"Processed video saved at: {output_video}")
