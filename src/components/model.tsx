export default function Model() {
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
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="Hand icon" />
        </div>
      </model-viewer>
    </div>
  );
}
