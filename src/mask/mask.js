import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs"
import * as facemesh from  "@tensorflow-models/facemesh";
import { drawMesh } from "./utilities";
import Webcam from "react-webcam";

function MaskView () {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null)

    // load face mesh
    const runFacemesh = async () => {
      const net = await facemesh.load({
        inputResolution:{width: 640, height: 480}, scale: 0.8
      });
      //const net = await faceLandmarksDetection.createDetector(model, detectorConfig);
      setInterval(() => {
        detect(net);
      }, 1);
    }

      
      const detect = async (net) => {
        console.log("in the detect function")
        // checks if the video propetrys is done or not
        if (typeof webcamRef.current !== "undefined"  && webcamRef.current !== null  && webcamRef.current.video.readyState === 4 ) {          

          // get vdeo properties
          const video = webcamRef.current.video
          const videoWidth = webcamRef.current.video.videoWidth;
          const videoHeight = webcamRef.current.video.videoHeight;
          
          // set the video width
          webcamRef.current.video.width = videoWidth;
          webcamRef.current.video.height = videoHeight;

          // set our canvas width
          canvasRef.current.width = videoWidth
          canvasRef.current.height = videoHeight
          
          // use the detector to find faces
          const face = await net.estimateFaces(video);
          console.log(face)

          // get canves context for drawing
          const ctx = canvasRef.current.getContext("2d");
          drawMesh(face, ctx);
          
        }
      }

      // run detect
      runFacemesh();
      
    return (
        <div className="Mask">
          <Webcam
            ref = {webcamRef}
            style = {{
              position: "absolute",
              marginRight: "auto",
              marginLeft: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 9,
              width: 640,
              height: 480,
            }}
        />

      <canvas 
          ref = {canvasRef}
          style = {{
               position: "absolute", 
               marginLeft: "auto",
               marginRight: "auto",
               left: 0,
               right: 0,
               textAlign: "center",
               zIndex: 9,
               width: 640,
               height: 480,
            }}
          />
        </div>
    )
}

export default MaskView;