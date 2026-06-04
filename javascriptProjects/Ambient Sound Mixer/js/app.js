import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";

class AmbientMixer {
  //
  constructor() {
    this.soundManager = new SoundManager();
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.isIntialized = false;
  }

  init() {
    try {
      this.soundManager.loadSound("rain", "audio/rain.mp3");
      this.isIntialized = true;
    } catch (error) {
      console.log("Failed to initialize app: ", error);
    }
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
