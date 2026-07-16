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
      this.masterVolumeSlider = 100;

      //Initialize sound state
      sound.forEach((sound) => {
        this.currentSoundState[sound.id] = 0;
      });

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

    //Handle Master play pause button
    if (this.ui.playPauseButton) {
      this.ui.playPauseButton.addEventListener("click", () => {
        this.toggleAllSounds();
      });
    }

    //Handle Reset button
    if (this.ui.resetButton) {
      this.ui.resetButton.addEventListener("click", () => {
        this.resetAll();
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

    //Update main play button state
    this.updateMainPlayButtonState();
  }

  //Toggle all sound
  toggleAllSounds() {
    if (this.soundManager.isPlaying) {
      //Toggle sound off
      this.soundManager.pauseAll();
      this.ui.updateMainPlayButton(false);
      sound.forEach((sound) => {
        this.ui.updateSoundPlayButton(sound.id, false);
      });
    } else {
      //Toggle sound on
      for (const [soundId, audio] of this.SoundManager.audioElements) {
        const card = document.querySelector(`[data-sound=${soundId}]`);
        const slider = card?.querySelector(".volume-slider");

        if (slider) {
          let volume = parseInt(slider.value);
          if (volume === 0) {
            volume = 50;
            slider.value = 50;
            this.ui.updateVolumeDisplay(soundId, 50);
          }

          this.currentSoundState[soundId] = volume;
          const effectiveVolume = (volume * masterVolume) / 100;
          audio.volume = effectiveVolume / 100;
          this.ui.updateSoundPlayButton(soundId, true);
        }
      }

      //Play all sounds
      this.soundManager.playAll();
      this.ui.updateMainPlayButton(true);
    }
  }

  //Set sound volume
  setSoundVolume(soundId, volume) {
    //set sound volume in state
    this.currentSoundState[soundId] = volume;

    // Calculate effective volume with master volume
    const effectiveVolume = (volume * this.masterVolume) / 100;

    //Update the sound vol with the scaled volu
    const audio = this.soundManager.audioElements.get(soundId);
    if (audio) {
      audio.volume = effectiveVolume / 100;
    }

    //update visual display
    this.ui.updateVolumeDispaly(soundId, volume);

    //Sync sounds
    this.updateMainPlayButtonState();
  }

  //Set master volume
  setMasterVolume(volume) {
    this.masterVolumeSlider = volume;

    //update the display
    const masterVolumeValue = document.getElementById("masterVolumeValue");
    if (masterVolumeValue) {
      masterVolumeValue.textContent = `${volume} %`;
    }

    //Appl master volume to all currently playing sound
    this.applyMasterVolumeToAll();
  }

  //Apply mastervol to all sound
  applyMasterVolumeToAll() {
    for (const [soundId, audio] of this.soundManager.audioElements) {
      if (!audio.paused) {
        const card = document.querySelector(`[data-sound="${soundId}"]`);
        const slider = card?.querySelector(".volume-slider");
        if (slider) {
          const individualVolume = parseInt(slider.value);
          //calculate the effective volume
          const effectiveVolume =
            (individualVolume * this.masterVolumeValue) / 100;

          //Apply to actual audio element
          audio.volume = effectiveVolume / 100;
        }
      }
    }
  }

  //Update main play button based on indiv sound
  updateMainPlayButtonState() {
    //check if sounds playing
    let anySoundsPlaying = false;
    for (const [soundIf, audio] of this.soundManager.audioElements) {
      if (!audio.paused) {
        anySoundsPlaying = true;
        break;
      }
    }
    //update the main button and internal state
    this.soundManager.isPlaying = anySoundsPlaying;
    this.ui.updateMainPlayButton(anySoundsPlaying);
  }

  //reset everything to default state
  resetAll() {
    //Stop all sounds
    this.soundManager.stopAll();
    //reset the master volume
    this.masterVolume = 100;

    //Reset UI
    this.ui.resetUI();
    console.log("All sounds and setting reset");
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
