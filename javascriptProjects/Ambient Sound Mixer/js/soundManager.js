export class SoundManager {
  constructor() {
    this.audioElements = new Map();
    this.isPlaying = false;
    console.log("Soundmanager Created");
  }

  //Load a sound file
  loadSound(soundId, filePath) {
    console.log(`Loading sound ${soundId} from ${filePath}`);
    return true;
  }
}
