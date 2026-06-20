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

    //Handle volume slider changes
    document.addEventListener("input", (e) => {
      if (e.target.classList.contains("volume-slider")) {
        const soundId = e.target.dataset.sound;
        const volume = parseInt(e.target.value);
        this.setSoundVolume(soundId, volume);
      }
    });

    //Handle master volume slider
    const masterVolumeSlider = document.getElementById("masterVolume");
    if (masterVolumeSlider) {
      masterVolumeSlider.addEventListener("input", (e) => {
        const volume = parseInt(e.target.value);
        this.setMasterVolume(volume);
      });
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

  //Toggle indiv sound
  async toggleSound(soundId) {
    const audio = this.soundManager.audioElements.get(soundId);
    if (!audio) {
      console.log(`Sound ${soundId} not found`);
      return false;
    }

    if (audio.paused) {
      //Get current slider value
      const card = document.querySelector(`[data-sound="${soundId}"]`);
      const slider = card.querySelector(".volume-slider");
      let volume = parseInt(slider.value);

      //If slider is at 0, default to 50%
      if (volume === 0) {
        volume = 50;
        this.ui.updateVolumeDisplay(soundId, volume);
      }

      //Sound is off so turn it on
      this.soundManager.setVolume(soundId, volume);
      await this.soundManager.playSound(soundId);
      this.ui.updateSoundPlayButton(soundId, true);
    } else {
      this.soundManager.pauseSound(soundId);
      this.ui.updateSoundPlayButton(soundId, false);
    }
  }

  //Set sound volume
  setSoundVolume(soundId, volume) {
    // Update sound volume in manager
    this.soundManager.setVolume(soundId, volume);

    //update visual display
    this.ui.updateVolumeDispaly(soundId, volume);
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
