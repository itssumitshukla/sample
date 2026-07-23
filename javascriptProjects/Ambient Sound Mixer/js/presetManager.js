import { sounds } from "./soundData";

export class PresetManger {
  constructor() {
    this.customPresets = this.loadCustomPresets();
  }

  //Load Presets from local storage
  loadCustomPresets() {
    const stored = localStorage.getItem("ambientMixerPresets");
    return stored ? JSON.parse(stored) : {};
  }

  //save custom presets to global storage
  saveCustomPresets() {
    localStorage.setItem(
      "ambientMixersPresets",
      JSON.stringify(this.customPresets),
    );
  }

  //Save current mix as preset
  savePreset(name, soundStates) {
    const presetId = `custom-${Date.now()}`;
    //Create preset object with only active sound
    const preset = {
      name,
      sounds,
    };

    for (const [soundId, volume] of Object.entries(soundStates)) {
      if (volume > 0) {
        preset.sounds[soundId] = volume;
      }
    }

    this.customPresets[presetId] = preset;
    this.saveCustomPresets();

    return presetId;
  }

  //check if preset name already exists
  presetNameExists(name) {
    return Object.values(this.customPresets).some(
      (preset) => preset.name === name,
    );
  }
}
