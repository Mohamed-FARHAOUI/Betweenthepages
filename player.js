/* ============================================================
   PLAYER — wraps the <audio> element and exposes a small API
   ============================================================ */

const Player = (() => {
  const audio = document.getElementById("audioEl");

  let currentIndex = -1;
  let isPlaying = false;
  let onChangeCallback = () => {};

  const els = {
    heroArt: document.getElementById("heroArt"),
    heroTitle: document.getElementById("heroTitle"),
    heroArtist: document.getElementById("heroArtist"),
    playerArt: document.getElementById("playerArt"),
    playerTitle: document.getElementById("playerTitle"),
    playerArtist: document.getElementById("playerArtist"),
    playBtn: document.getElementById("playBtn"),
    playIcon: document.getElementById("playIcon"),
    pauseIcon: document.getElementById("pauseIcon"),
    seekBar: document.getElementById("seekBar"),
    currentTime: document.getElementById("currentTime"),
    duration: document.getElementById("duration"),
    volumeBar: document.getElementById("volumeBar"),
  };

  function updateSeekFill() {
    const pct = els.seekBar.max > 0 ? (els.seekBar.value / els.seekBar.max) * 100 : 0;
    els.seekBar.style.setProperty("--fill", `${pct}%`);
  }
  function updateVolumeFill() {
    const pct = (els.volumeBar.value / els.volumeBar.max) * 100;
    els.volumeBar.style.setProperty("--fill", `${pct}%`);
  }

  function loadTrack(index) {
    const track = tracks[index];
    if (!track) return;
    currentIndex = index;
    audio.src = track.file;

    const artStyle = artworkStyle(track, index);
    els.heroArt.setAttribute("style", artStyle);
    els.playerArt.setAttribute("style", artStyle);

    els.heroTitle.textContent = track.title;
    els.heroArtist.textContent = track.artist;
    els.playerTitle.textContent = track.title;
    els.playerArtist.textContent = track.artist;

    document.getElementById("heroTrack").removeAttribute("aria-hidden");
    markActiveTrack(index, false);
    onChangeCallback(index);
  }

  function play() {
    if (currentIndex === -1) {
      loadTrack(0);
    }
    audio.play().catch(() => {
      /* Autoplay or missing file — surface nothing intrusive, UI stays paused */
    });
  }

  function pause() {
    audio.pause();
  }

  function togglePlay() {
    if (audio.paused) play();
    else pause();
  }

  function next() {
    const nextIndex = (currentIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    play();
  }

  function prev() {
    // Restart current track if more than 3s in, else go back a track
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prevIndex);
    play();
  }

  function selectTrack(index) {
    loadTrack(index);
    play();
  }

  /* ---- audio element events ---- */
  audio.addEventListener("play", () => {
    isPlaying = true;
    els.playIcon.hidden = true;
    els.pauseIcon.hidden = false;
    els.playBtn.setAttribute("aria-label", "Pause");
    markActiveTrack(currentIndex, true);
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    els.playIcon.hidden = false;
    els.pauseIcon.hidden = true;
    els.playBtn.setAttribute("aria-label", "Play");
    markActiveTrack(currentIndex, false);
  });

  audio.addEventListener("timeupdate", () => {
    els.currentTime.textContent = formatTime(audio.currentTime);
    els.seekBar.max = audio.duration || 0;
    els.seekBar.value = audio.currentTime;
    updateSeekFill();
  });

  audio.addEventListener("loadedmetadata", () => {
    els.duration.textContent = formatTime(audio.duration);
    els.seekBar.max = audio.duration || 0;
    if (currentIndex > -1) setTrackDuration(currentIndex, audio.duration);
  });

  audio.addEventListener("ended", () => next());

  audio.addEventListener("error", () => {
    // Missing/undecoded audio file — keep the UI calm and just stay paused.
    isPlaying = false;
    els.playIcon.hidden = false;
    els.pauseIcon.hidden = true;
  });

  /* ---- control wiring ---- */
  els.playBtn.addEventListener("click", togglePlay);
  document.getElementById("nextBtn").addEventListener("click", next);
  document.getElementById("prevBtn").addEventListener("click", prev);

  els.seekBar.addEventListener("input", () => {
    audio.currentTime = Number(els.seekBar.value);
    updateSeekFill();
  });

  els.volumeBar.addEventListener("input", () => {
    audio.volume = Number(els.volumeBar.value);
    updateVolumeFill();
  });
  audio.volume = Number(els.volumeBar.value);
  updateVolumeFill();

  /* ---- keyboard shortcuts (space to toggle, arrows to seek) ---- */
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    } else if (e.code === "ArrowRight") {
      audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
    } else if (e.code === "ArrowLeft") {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    }
  });

  return {
    loadTrack,
    play,
    pause,
    togglePlay,
    next,
    prev,
    selectTrack,
    onChange(cb) { onChangeCallback = cb; },
    get currentIndex() { return currentIndex; },
    get isPlaying() { return isPlaying; },
  };
})();
