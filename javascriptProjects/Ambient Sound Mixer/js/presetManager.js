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
  }
}
