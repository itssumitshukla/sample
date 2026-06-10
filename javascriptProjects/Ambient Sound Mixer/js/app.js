import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";
import { UI } from "./ui.js";

class AmbientMixer {
  //
  constructor() {
    this.soundManager = new SoundManager();
    this.ui = new UI();
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.isIntialized = false;
  }

  async init() {
    try {
      //Initialize UI
      this.ui.init();
      //Render sound cards
      this.ui.renderSoundCards(sounds);
      this.loadAllSound();
      this.soundManager.setVolume("rain", 30);
      await this.soundManager.playSound("rain");
      this.isIntialized = true;
    } catch (error) {
      console.log("Failed to initialize app: ", error);
    }
  }

  //Load all sound
  loadAllSound() {
    sounds.forEach((sound) => {
      const audioUrl = `audio/${sound.file}`;
      const success = this.soundManager.loadSound(sound.id, audioUrl);
      if (!success) {
        console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`);
      }
    });
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
