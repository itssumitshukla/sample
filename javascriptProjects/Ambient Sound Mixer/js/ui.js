export class UI {
  constructor() {
    this.soundCardsContainer = null;
    this.masterVolumeSlider = null;
    this.masterVolumeValue = null;
    this.playPauseButton = null;
    this.resetButton = null;
    this.modal = null;
    this.customPresetsContainer = null;
    this.timerDisplay = null;
    this.timerSelect = null;
    this.themeToggle = null;
  }

  init() {
    this.soundCardsContainer = document.querySelector(".grid");
    this.masterVolumeSlider = document.getElementById("masterVolume");
    this.masterVolumeValue = document.getElementById("masterVolumeValue");
    this.playPauseButton = document.getElementById("playPauseAll");
    this.resetButton = document.getElementById("resetAll");
    this.modal = document.getElementById("savePresetModal");
    this.customPresetsContainer = document.getElementById("customPresets");
    this.timerDisplay = document.getElementById("timerDisplay");
    this.timerSelect = document.getElementById("timerSelect");
    this.themeToggle = document.getElementById("themeToggle");
  }

  // Create sound card HTML
  createSoundCard(sound) {
    const card = document.createElement("div");
    card.className =
      "sound-card bg-white/10 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden transition-all duration-300";
    card.dataset.sound = sound.id;

    card.innerHTML = ` <div class="flex flex-col h-full">
      <!-- Sound Icon and Name -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="sound-icon-wrapper w-12 h-12 rounded-full bg-gradient-to-br ${sound.color} flex items-center justify-center">
            <i class="fas ${sound.icon} text-white text-xl"></i>
          </div>
          <div>
            <h3 class="font-semibold text-lg">${sound.name}</h3>
            <p class="text-xs opacity-70">${sound.description}</p>
          </div>
        </div>
        <button type="button" class="play-btn w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center" data-sound="${sound.id}">
          <i class="fas fa-play text-sm"></i>
        </button>
      </div>

      <!-- Volume Control -->
      <div class="flex-1 flex flex-col justify-center">
        <div class="flex items-center space-x-3">
          <i class="fas fa-volume-low opacity-50"></i>
          <input type="range" class="volume-slider flex-1" min="0" max="100" value="0" data-sound="${sound.id}">
          <span class="volume-value text-sm w-8 text-right">0</span>
        </div>

        <!-- Volume Bar Visualization -->
        <div class="volume-bar mt-3">
          <div class="volume-bar-fill" style="width: 0%"></div>
        </div>
      </div>
    </div>`;

    return card;
  }

  // Create custom preset button
  createCustomPresetButton(name, presetId) {
    const button = document.createElement("button");
    button.className =
      "custom-preset-btn bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 relative group";
    button.dataset.preset = presetId;
    button.innerHTML = `  <i class="fas fa-star mr-2 text-yellow-400"></i>
    ${name}
    <button type="button" class="delete-preset absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-preset="${presetId}">
      <i class="fas fa-times text-xs text-white"></i>
    </button>`;
    return button;
  }

  // Render all sound cards
  renderSoundCards(sounds) {
    this.soundCardsContainer.innerHTML = "";
    sounds.forEach((sound) => {
      const card = this.createSoundCard(sound);
      this.soundCardsContainer.appendChild(card);
    });
  }

  // Update play/pause button for individual sound
  updateSoundPlayButton(soundId, isPlaying) {
    const card = document.querySelector(`[data-sound="${soundId}"]`);

    if (card) {
      const playBtn = card.querySelector(".play-btn");
      const icon = playBtn.querySelector("i");

      if (isPlaying) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        card.classList.add("playing");
      } else {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
        card.classList.remove("playing");
      }
    }
  }

  // Update volume display for a sound
  updateVolumeDisplay(soundId, volume) {
    const card = document.querySelector(`[data-sound="${soundId}"]`);

    if (card) {
      // Update number display
      const volumeValue = card.querySelector(".volume-value");
      if (volumeValue) {
        volumeValue.textContent = volume;
      }

      // Update volume bar visuals
      const volumeBarFill = card.querySelector(".volume-bar-fill");
      if (volumeBarFill) {
        volumeBarFill.style.width = `${volume}%`;
      }

      // Udpate slider position
      const slider = card.querySelector(".volume-slider");
      if (slider) {
        slider.value = volume;
      }
    }
  }

  // Update main play/pause button
  updateMainPlayButton(isPlaying) {
    const icon = this.playPauseButton.querySelector("i");

    if (isPlaying) {
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  }

  // Reset all UI elements to default state
  resetUI() {
    // Reset sliders to 0
    const sliders = document.querySelectorAll(".volume-slider");
    sliders.forEach((slider) => {
      slider.value = 0;
      const soundId = slider.dataset.sound;
      this.updateVolumeDisplay(soundId, 0);
    });

    // Reset all play buttons to play state
    const playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach((btn) => {
      const icon = btn.querySelector("i");
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    });

    // Remove playing class from cards
    const cards = document.querySelectorAll(".sound-card");
    cards.forEach((card) => {
      card.classList.remove("fa-playing");
    });

    // Reset main play/pause button
    this.updateMainPlayButton(false);

    // Reset master volume to 100%
    this.masterVolumeSlider.value = 100;
    this.masterVolumeValue.textContent = "100%";
  }

  // Show save preset modal
  showModal() {
    this.modal.classList.remove("hidden");
    this.modal.classList.add("flex");
    document.getElementById("presetName").focus();
  }

  // Hide save preset modal
  hideModal() {
    this.modal.classList.add("hidden");
    this.modal.classList.remove("flex");
    document.getElementById("presetName").value = "";
  }

  // Add custom preset to UI
  addCustomPreset(name, presetId) {
    const button = this.createCustomPresetButton(name, presetId);
    this.customPresetsContainer.appendChild(button);
  }

  // Highlight active preset
  setActivePreset(presetKey) {
    // Remove active class from all buttons
    document
      .querySelectorAll(".preset-btn, .custom-preset-btn")
      .forEach((btn) => {
        btn.classList.remove("preset-active");
      });

    // Add active class to selected presets
    const activeButton = document.querySelector(
      `.preset-btn[data-preset="${presetKey}"], .custom-preset-btn[data-preset="${presetKey}"]`,
    );

    if (activeButton) {
      activeButton.classList.add("preset-active");
    }
  }

  // Remove custom preset from UI
  removeCustomPreset(presetId) {
    const button = document.querySelector(
      `.custom-preset-btn[data-preset="${presetId}"]`,
    );
    if (button) {
      button.remove();
    }
  }

  // Update timer display
  updateTimerDisplay(minutes, seconds) {
    if (this.timerDisplay) {
      if (minutes > 0 || seconds > 0) {
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
        this.timerDisplay.textContent = formattedTime;
        this.timerDisplay.classList.remove("hidden");
      } else {
        this.timerDisplay.classList.add("hidden");
      }
    }
  }

  // Toggle theme
  toggleTheme() {
    const body = document.body;
    const icon = this.themeToggle.querySelector("i");

    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      body.classList.add("light-theme");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  }
}
