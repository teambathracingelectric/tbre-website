"use client";

import "@google/model-viewer/lib/model-viewer";
import Image from "next/image";

// interface ModelViewerJSX {
//   src: string;
//   poster?: string;
//   iosSrc?: string;
//   seamlessPoster?: boolean;
//   autoplay?: boolean;
//   environmentImage?: string;
//   exposure?: string;
//   interactionPromptThreshold?: string;
//   shadowIntensity?: string;
//   ar?: boolean;
//   arModes?: string;
//   autoRotate?: boolean;
//   cameraControls?: boolean;
//   cameraOrbit?: string;
//   alt?: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   sx?: any;
// }

export function CarModel({ src }: { src: string }) {
  return (
    // @ts-expect-error model-viewer
    <model-viewer
      id="first"
      src={src}
      // TODO: add iosSrc?
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
      ar-camera-controls
      auto-rotate
      camera-controls
      camera-orbit="0deg 90deg 0deg 8.37364m"
      alt="3D model"
      // className="w-full h-full"
      // className="w-[800px] h-full"
      style={
        {
          // width: "800px",
          // height: "400px",
        }
      }
      className="w-full h-full"
    >
      <button slot="ar-button" id="ar-button">
        View in your space
      </button>

      <div className="poster" slot="poster">
        <Image
          className="pre-prompt"
          src="/prompt.svg"
          alt="Tap to view in AR"
          unoptimized
        />
      </div>
      {/* @ts-expect-error model-viewer */}
    </model-viewer>
  );

  return (
    <div>
      {/* @ts-expect-error model-viewer */}
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
          <Image
            src="https://modelviewer.dev/shared-assets/icons/hand.png"
            alt="Hand icon"
            unoptimized
          />
        </div>
        {/* @ts-expect-error model-viewer */}
      </model-viewer>
    </div>
  );
}
