export class SoundManager {
  constructor() {
    this.audioElements = new Map();
    this.isPlaying = false;
    console.log("Soundmanager Created");
  }

  //Load a sound file
  loadSound(soundId, filePath) {
    try {
      const audio = new Audio();
      audio.src = filePath;
      audio.loop = true;
      audio.preload = "metadata";
      //Add sound to audio elements map
      this.audioElements.set(soundId, audio);
      return true;
    } catch (error) {
      console.error(`Failed to load sound ${soundId}`);
      return false;
    }
  }
}
