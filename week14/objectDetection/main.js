import {
  ObjectDetector,
  FilesetResolver,
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";

let objectDetector = null;

function loadData() {
  fetch(
    "https://images.unsplash.com/photo-1712371963992-270529514219?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
    .then((response) => {
      if (!response.ok) throw new Error(response.message);
      return response.blob();
    })
    .then((data) => {
      let blobURL = URL.createObjectURL(data);
      console.log(blobURL);
      let img = document.createElement("img");
      img.src = blobURL;
      img.alt = "random ";
      document.querySelector("main").append(img);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleDetection() {
  let image = document.querySelector("img");
  const detections = objectDetector.detect(image);
  console.log(detections);
}

async function init() {
  const vision = await FilesetResolver.forVisionTasks(
    // path/to/wasm/root
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );
  objectDetector = await ObjectDetector.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0_uint8.tflite`,
    },
    scoreThreshold: 0.3,
    runningMode: "IMAGE",
  });
  loadData();
  document.getElementById("btn").addEventListener("click", handleDetection);
}

document.addEventListener("DOMContentLoaded", init);
