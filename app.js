/* ============================================================
   APP — ties landing screen, playlist, player and note panel together
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById("landing");
  const app = document.getElementById("app");
  const enterBtn = document.getElementById("enterBtn");

  function enterApp() {
    landing.classList.add("is-leaving");
    setTimeout(() => {
      landing.hidden = true;
      app.hidden = false;
    }, 560);
  }
  enterBtn.addEventListener("click", enterApp);
  enterBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      enterApp();
    }
  });

  /* ---- playlist + player wiring ---- */
  renderPlaylist({
    onSelect: (index) => Player.selectTrack(index),
    onNoteOpen: (index) => openNotePanel(index),
  });


  Player.onChange((index) => markActiveTrack(index, Player.isPlaying));

  /* ---- note panel (per-track story / page reference) ---- */
  const notePanel = document.getElementById("notePanel");
  const notePanelBackdrop = document.getElementById("notePanelBackdrop");
  const notePanelClose = document.getElementById("notePanelClose");

  function openNotePanel(index) {
    const track = tracks[index];
    if (!track) return;

    document.getElementById("notePanelBook").textContent = track.book || "";
    document.getElementById("notePanelTitle").textContent = track.title;
    document.getElementById("notePanelPage").textContent = track.page ? `Page ${track.page}` : "";
    document.getElementById("notePanelBody").textContent =
      track.note || "This one just belonged here.";

    notePanel.hidden = false;
    notePanelClose.focus();
  }

  function closeNotePanel() {
    notePanel.hidden = true;
  }

  notePanelBackdrop.addEventListener("click", closeNotePanel);
  notePanelClose.addEventListener("click", closeNotePanel);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !notePanel.hidden) closeNotePanel();
  });

  /* ---- offline / PWA ---- */
  Offline.init();

  /* ---- install prompt (subtle, one-time) ---- */
  let deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    // Intentionally understated: no banner, no repeated nagging.
    // A future enhancement could surface a single small hint here
    // the first time the soundtrack is saved for offline.
  });
   
  /* ---- birthday easter egg (Aug 22) ---- */
(function revealBirthdayIfDue() {
  const panel = document.getElementById("birthdayPanel");
  const backdrop = document.getElementById("birthdayPanelBackdrop");
  const closeBtn = document.getElementById("birthdayPanelClose");
  if (!panel) return;

  const now = new Date();
  const isOnOrAfterAug22 =
    now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() >= 22);
  const forceShow = new URLSearchParams(location.search).has("birthday");

  if (!(isOnOrAfterAug22 || forceShow)) return;

  // Show once per session so it doesn't reappear on every click/navigation
  if (sessionStorage.getItem("btp_birthday_seen") === "true") return;

  panel.hidden = false;
  sessionStorage.setItem("btp_birthday_seen", "true");

  function close() {
    panel.hidden = true;
  }
  backdrop.addEventListener("click", close);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) close();
  });
})();
});
