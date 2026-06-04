import { sounds, defaultPresets } from "./soundData";

class AmbientMixer {
  //
  constructor() {
    console.log("Initializing State.....");
    this.soundManager = null;
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.isIntialized = false;
  }

  init() {
    try {
      console.log("Initializing App....:");
      this.isIntialized = true;
    } catch (error) {
      console.log("Failed to initialize app: ", error);
    }
  }
}
