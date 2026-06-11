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
      this.setupEventListeners();
      this.loadAllSound();
      this.soundManager.setVolume("rain", 30);
      await this.soundManager.playSound("rain");
      this.isIntialized = true;
    } catch (error) {
      console.log("Failed to initialize app: ", error);
    }
  }

  //Setup all event listeners
  setupEventListeners() {
    //Handle all clicks with event delegation
    document.addEventListener("click", async (e) => {
      //Check if play btn was clicked
      if (e.target.closest(".play-btn")) {
        const soundId = e.target.closest(".play-btn").dataset.sound;
        await this.toggleSound(soundId);
      }
    });
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

  //Toggle indiv sound
  async toggleSound(soundId) {
    const audio = this.soundManager.audioElements.get(soundId);
    if (!audio) {
      console.log(`Sound ${soundId} not found`);
      return false;
    }

    if (audio.paused) {
      //Sound is off so turn it on
      this.soundManager.setVolume(soundId, 50);
      await this.soundManager.playSound(soundId);
      //Update play button
    }
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
