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

  //Play a specific sound
  async playSound(soundId) {
    const audio = this.audioElements.get(soundId);
    try {
      await audio.play();
      console.log(`Playing:::${soundId}`);
      return true;
    } catch (error) {
      console.log(`Failed to play: ${soundId}`, error);
      return play;
    }
  }

  //Pause a specific sound
  pauseSound(soundId) {
    const audio = this.audioElements.get(soundId);
    if (audio && !audio.paused) {
      audio.pause();
      console.log(`Paused : ${soundId}`);
    }
  }

  //Set volume
  setVolume(soundId, volume) {
    const audio = this.audioElements.get(soundId);
    if (!audio) {
      console.log(`Sound : ${soundId} is not found`);
      return false;
    }

    //Convert 0-100 to 0-1
    audio.volume = volume / 100;
    console.log(`Volume for ${soundId} : ${volume}`);
    return false;
  }
}
