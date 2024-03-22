import { ReactMediaRecorder } from "react-media-recorder";
import './recoder.css'
function ScreenRecorder(){
  return (
    <ReactMediaRecorder
      screen
      render={({ status, startRecording, stopRecording, pauseRecording, mediaBlobUrl }) => (
        <div className="recoder">
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <button onClick={pauseRecording}>Pause Recorder</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
)};

export default ScreenRecorder;