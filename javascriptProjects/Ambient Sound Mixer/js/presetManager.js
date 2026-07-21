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
}
