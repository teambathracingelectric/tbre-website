"use client";

import "@google/model-viewer/lib/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}

const glbSrc = "/models/ferrari_f1_2019.glb";
// const iosSrc = "/assets/model.usdz";

export default function CarModel() {
  return (
    <model-viewer
      id="first"
      src={glbSrc}
      // ios-src={iosSrc}
      seamless-poster
      // poster="poster.webp"
      poster="car.png"
      environment-image="neutral"
      exposure="1.0"
      interaction-prompt-threshold="0"
      shadow-intensity="1"
      ar
      autoplay
      ar-modes="webxr scene-viewer quick-look"
      auto-rotate
      camera-controls
      camera-orbit="0deg 90deg 0deg 8.37364m"
      alt="3D model"
      // className="w-full h-full"
      // className="w-[800px] h-full"
      style={{
        width: "800px",
        height: "400px",
      }}
    >
      <div className="poster" slot="poster">
        <img className="pre-prompt" src="/prompt.svg" />
      </div>
    </model-viewer>
  );

  return (
    <div>
      <model-viewer
        src="/public/models/ferrari_f1_2019.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="commerce"
        // poster="poster.webp"
        poster="car.png"
        shadow-intensity={1}
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img
            src="https://modelviewer.dev/shared-assets/icons/hand.png"
            alt="Hand icon"
          />
        </div>
      </model-viewer>
    </div>
  );
}
