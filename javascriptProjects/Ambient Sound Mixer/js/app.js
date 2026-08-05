import { PresetManger } from "./presetManager.js";
import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";
import { UI } from "./ui.js";
import { timer } from "./timer.js";

class AmbientMixer {
  //
  constructor() {
    this.soundManager = new SoundManager();
    this.ui = new UI();
    this.presetManager = new PresetManger();
    this.timer = new Timer(
      () => this.onTimerComplete(),
      (minutes, seconds) => this.ui.updateTimerDisplay(minutes, seconds),
    );
    this.currentSoundState = {};
    this.masterVolume = 100;
    this.isInitialized = false;
  }

  async init() {
    try {
      // Initialize UI
      this.ui.init();

      // Render sound cards using our sound data
      this.ui.renderSoundCards(sounds);

      this.setupEventListeners();

      //Load custom prests in ui
      this.loadCustomPresetsUI();

      // Load all sound files
      this.loadAllSounds();

      // Initialize sound states after loading sounds
      sounds.forEach((sound) => {
        this.currentSoundState[sound.id] = 0;
      });

      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize app: ", error);
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

      //Check if delete button was clicked
      if (e.target.closest(".delete-preset")) {
        e.stopPropagation();
        const presetId = e.target.closest(".delete-preset").dataset.preset;
        this.deleteCustomPreset(presetId);

        return;
      }
      if (e.target.closest(".preset-btn")) {
        //Check if a default preset btn was clicked
        const presetKey = e.target.closest(".preset-btn").dataset.preset;
        await this.loadPreset(presetKey);
      }
      //Check if a default preset btn was clicked
      if (e.target.closest(".custom-preset-btn")) {
        const presetKey = e.target.closest(".custom-preset-btn").dataset.preset;
        await this.loadPreset(presetKey, true);
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

    //Save preset button
    const saveButton = document.getElementById("savePreset");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        this.showSavePresetModal();
      });
    }

    //Confirm Save preset button
    const confirmSaveButton = document.getElementById("confirmSave");
    if (confirmSaveButton) {
      confirmSaveButton.addEventListener("click", () => {
        this.saveCurrentPreset();
      });
    }

    //Cancel Save preset button
    const cancelSaveButton = document.getElementById("cancelSave");
    if (cancelSaveButton) {
      cancelSaveButton.addEventListener("click", () => {
        this.ui.hideModal();
      });
    }

    //Close modal if backdrop is clicked
    if (this.ui.modal) {
      this.ui.modal.addEventListener("click", (e) => {
        if (e.target === this.ui.modal) {
          this.ui.hideModal();
        }
      });
    }
  }

  // Load all sound files
  loadAllSounds() {
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

      //Set current sound state
      this.currentSoundState[soundId] = volume;

      //Sound is off so turn it on
      this.soundManager.setVolume(soundId, volume);
      await this.soundManager.playSound(soundId);
      this.ui.updateSoundPlayButton(soundId, true);
    } else {
      this.soundManager.pauseSound(soundId);
      this.currentSoundState[soundId] = 0;
      this.ui.updateSoundPlayButton(soundId, false);

      //Set current sound state to 0
      this.currentSoundState[soundId] = 0;
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

    //reset active preset
    this.ui.setActivePreset(null);

    //reset sound state
    sounds.forEach((sound) => {
      this.currentSoundState[sound.id] = 0;
    });

    //Reset UI
    this.ui.resetUI();
  }
  //Load a preset config
  loadPreset(presetKey, custom = false) {
    let preset;
    if (custom) {
      preset.this.presetManager.loadPreset(presetKey);
    } else {
      preset = defaultPresets[presetKey];
    }

    //First stop all sound
    this.soundManager.stopAll();

    //reset all volume to 0
    sounds.forEach((soundm) => {
      this.currentSoundState[sound.id] = 0;
      this.ui.updateVolumeDisplay(sound.id, 0);
      this.ui.updateSoundPlayButton(sound.id, false);
    });

    //Apply the preset volume
    for (const [soundId, volume] of Object.entries(preset, sounds)) {
      //set volume state
      this.currentSoundState[soundId] = volume;

      //updatre UI
      this.ui.updateVolumeDisplay(soundId, volume);

      //calc effective volume
      const effectiveVolume = (volme * this.masterVolume) / 100;

      //get audio element
      const audio = this.soundManager.audioElements.get(soundId);

      if (audio) {
        audio.volume = effectiveVolume / 100;

        //Play sound
        audio.play();
        this.ui.updateSoundPlayButton(soundId, truse);
      }
    }

    //update main play button and state
    this.soundManager.isPlaying = true;
    this.ui.updateMainPlayButton = true;

    //Set active preset
    if (presetKey) {
      this.ui.setActivePreset(presetKey);
    }
  }

  //Show save preset modal
  showSavePresetModal() {
    //Check if any sounds are active
    const hasActiveSounds = Object.values(this.currentSoundState).some(
      (v) => v > 0,
    );

    if (!hasActiveSounds) {
      alert("No active sounds for preset");
    }

    this.ui.showModal();
  }

  //save current preset
  saveCurrentPreset() {
    const nameInput = document.getElementById("presetName");
    const name = nameInput.value.trim();

    if (!name) {
      alert("Please enter a preset name");
      return;
    }

    if (this.presetManager.presetNameExists(name)) {
      alert(`A Preset with the name ${name} already exists`);
      return;
    }

    const presetId = this.presetManager.savePreset(
      name,
      this.currentSoundState,
    );
    this.ui.hideModal();
  }

  //Load custom preset buttons in UI
  loadCustomPresetsUI() {
    const customPresets = this.presetManager.customPresets;
    for (const [presetId, preset] of Object.entries(customPresets)) {
      this.ui.addCustomPreset(preset.name, presetId);
    }
  }

  //Delete custom preset
  deleteCustomPreset(presetId) {
    if (this.presetManager.deletePreset(presetId)) {
      this.ui.removeCustomPreset(presetId);
    }
  }
}

//Initialize app when dom is ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
