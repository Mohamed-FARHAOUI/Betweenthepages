/* ============================================================
   OFFLINE — service worker registration + "save for offline" flow
   Keeps technical language ("cache", "service worker") out of the UI.
   ============================================================ */

const Offline = (() => {
  const STORAGE_KEY = "btp_saved_offline";

  function showToast(message, duration = 2600) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, duration);
  }

  function setButtonsState(state) {
    // state: "idle" | "saving" | "saved"
    const desktopBtn = document.getElementById("offlineBtnDesktop");
    const mobileBtn = document.getElementById("offlineBtnMobile");
    const label = desktopBtn.querySelector(".offline-btn__label");

    [desktopBtn, mobileBtn].forEach((btn) => {
      btn.classList.toggle("is-saving", state === "saving");
      btn.classList.toggle("is-saved", state === "saved");
    });

    if (state === "idle") {
      label.textContent = "Save for Offline";
      mobileBtn.setAttribute("aria-label", "Save for offline listening");
    } else if (state === "saving") {
      label.textContent = "Saving…";
      mobileBtn.setAttribute("aria-label", "Saving for offline listening");
    } else if (state === "saved") {
      label.textContent = "The Soundtrack Is Yours";
      mobileBtn.setAttribute("aria-label", "Soundtrack saved for offline listening");
    }
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return null;
    try {
      const reg = await navigator.serviceWorker.register("sw.js");
      return reg;
    } catch (err) {
      console.warn("Service worker registration failed:", err);
      return null;
    }
  }

  function sendCacheRequest() {
    return new Promise((resolve, reject) => {
      if (!navigator.serviceWorker.controller) {
        // First load — worker isn't controlling the page yet.
        reject(new Error("no-controller"));
        return;
      }
      const channel = new MessageChannel();
      channel.port1.onmessage = (event) => {
        if (event.data && event.data.ok) resolve();
        else reject(new Error(event.data?.error || "cache-failed"));
      };
      navigator.serviceWorker.controller.postMessage(
        { type: "CACHE_SOUNDTRACK", tracks: tracks.map((t) => t.file) },
        [channel.port2]
      );
    });
  }

  async function saveForOffline() {
  if (localStorage.getItem(STORAGE_KEY) === "true") {
    showToast("Already saved — it's yours.");
    return;
  }
  setButtonsState("saving");
  try {
    await registerServiceWorker();

    // Wait for the worker to actually take control, instead of guessing a delay.
    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => {
        navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
      });
    }

    await sendCacheRequest();
    localStorage.setItem(STORAGE_KEY, "true");
    setButtonsState("saved");
    showToast("✓ The soundtrack is yours");
  } catch (err) {
    setButtonsState("idle");
    showToast("Couldn't save it just now — try again in a moment.");
  }
}

  function initOfflineIndicator() {
    const indicator = document.getElementById("offlineIndicator");
    function update() {
      indicator.hidden = navigator.onLine;
    }
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    update();
  }

  function init() {
    initOfflineIndicator();
    registerServiceWorker();

    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setButtonsState("saved");
    }

    document.getElementById("offlineBtnDesktop").addEventListener("click", saveForOffline);
    document.getElementById("offlineBtnMobile").addEventListener("click", saveForOffline);
  }

  return { init };
})();
