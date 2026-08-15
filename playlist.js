
const tracks = [
   {
    title: "The Healing Curve",
    artist: "Estela Valentine",
    file: "The Healing Curve.mp3",
    artwork: "",
    book: "Book II",
    page: "",
    lang: "en",
    note: "I don't think I need some grand adventure. Sometimes, I'd be happy just being somewhere close to you."
  },
  {
    title: "Fade Into You",
    artist: "Mazzy Star",
    file: "Fade Into You.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "If I could choose one place to disappear for a while,it would be somewhere between your eyes and your smile."
  },
  {
    title: "You Don't Know",
    artist: "",
    file: "You Don't Know (slowed  reverb).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "You don't know that I notice the little things you never think about. The way you lean when you laugh. The look you give before you smile. Those few seconds when I can already tell what's coming. You probably don't realize how much of you I remember."
  },
  {
    title: "Close to You",
    artist: "Zack Webb",
    file: "Close to You.mp3",
    artwork: "",
    book: "Book I",
    page: "287",
    lang: "en",
    note: "I don't think I need some grand adventure. Sometimes, I'd be happy just being somewhere close to you."
  },
  {
    title: "Aching Bones",
    artist: "Zack Web",
    file: "Aching Bones.mp3",
    artwork: "",
    book: "Book I",
    page: "63",
    lang: "en",
    note: "You probably don't know how much of you I've carried with me— in little memories, in quiet moments, in all the things I notice without meaning to."
  },

  {
    title: "Born To Die",
    artist: "Lana Del Rey",
    file: "Lana Del Rey - Born To Die.mp3",
    artwork: "",
    book: "Book I",
    page: "87",
    lang: "en",
    note: "Maybe we're all just passing through this life,but some people make you wish you could stay a little longer."
  },
  {
    title: "Knockin' on Heaven's Door",
    artist: "Bob Dylan",
    file: "Knockin' On Heaven's Door.mp3",
    artwork: "",
    book: "Book I",
    page: "134",
    lang: "en",
    note: ""
  },
  {
    title: "A Different Age",
    artist: "Current Joys",
    file: "Current Joys - A Different Age.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "I wonder if, somewhere in another version of our lives, we're still living in the moments we thought would last forever."
  },
  {
    title: "Clementine",
    artist: "Sarah Jaffe",
    file: "Clementine.mp3",
    artwork: "",
    book: "Book II",
    page: "201",
    lang: "en",
    note: "I don't know what the future keeps for us, but I'm glad you were part of this chapter."
  },
  {
    title: "M83 - Wait (Official Video)",
    artist: "M83",
    file: "M83 - Wait (Official Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Some moments don't ask us to stay. They simply ask us to remember them when everything else has changed."
  },
  {
    title: "Miguel - Sure Thing (Lyrics)",
    artist: "Miguel",
    file: "Miguel - Sure Thing (Lyrics).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Some things in life are uncertain. But somehow, you've always felt like one of the sure things."
  },
  {
    title: "Moby - 'The Last Day' ft. Skylar Grey (Official Video)",
    artist: "Moby",
    file: "Moby - 'The Last Day' ft. Skylar Grey (Official Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "If this were the last day of this chapter, I'd still be grateful that you were in it."
  },
  {
    title: "Still Corners - The Trip",
    artist: "Still Corners",
    file: "Still Corners - The Trip.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "If I could get lost anywhere, I'd choose somewhere we'd never been before— just to see where we'd end up."
  },
  {
    title: "The VANNS - Accomplice (Official Video)",
    artist: "The VANNS",
    file: "The VANNS - Accomplice (Official Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "I'd choose you as my accomplice in all the little adventures— the ones we plan, and especially the ones we don't."
  },
  {
    title: "Lana Del Rey - Salvatore (Lyrics)",
    artist: "Lana Del Rey",
    file: "Lana Del Rey - Salvatore (Lyrics).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "If I could keep one version of you forever, I'd choose the one standing there in the golden light, before the evening disappeared."
  },
  {
    title: "radiohead - let down (best part looped reupload)",
    artist: "radiohead",
    file: "radiohead - let down (best part looped reupload).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Maybe we're all just trying to find one place where we don't feel alone."
  },
  
  
];


function formatTime(seconds) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}


function artworkStyle(track, index) {
  if (track.artwork) return `background-image:url('${track.artwork}');background-size:cover;background-position:center;`;
  const hue = (index * 47) % 360;
  return `background:linear-gradient(135deg, hsl(${hue} 28% 20%), var(--ink-2));`;
}


function renderPlaylist({ onSelect, onNoteOpen }) {
  const list = document.getElementById("playlist");
  const countEl = document.getElementById("trackCount");
  list.innerHTML = "";

  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.className = "track";
    li.setAttribute("tabindex", "0");
    li.setAttribute("role", "button");
    li.setAttribute("aria-label", `Play ${track.title} by ${track.artist}`);
    li.dataset.index = index;

    const bookLine = track.book && track.page ? `${track.book} · p. ${track.page}` : (track.book || "");

    li.innerHTML = `
      <span class="track__index">
        <span class="track__num">${String(index + 1).padStart(2, "0")}</span>
        <span class="track__eq"><span></span><span></span><span></span></span>
      </span>
      <div class="track__body">
        <p class="track__title">${track.title}</p>
        <p class="track__artist">${track.artist}</p>
        ${bookLine ? `<p class="track__page-note">${bookLine}</p>` : ""}
      </div>
      <span class="track__col-book">${bookLine}</span>
      <span class="track__col-time">—</span>
      <button class="track__note-btn" aria-label="Story behind this song" ${track.note || bookLine ? "" : "hidden"}>⋯</button>
    `;

    li.style.setProperty("--art", "1");
    li.addEventListener("click", (e) => {
      if (e.target.closest(".track__note-btn")) {
        onNoteOpen(index);
        return;
      }
      onSelect(index);
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(index);
      }
    });

    list.appendChild(li);
  });

  countEl.textContent = `${tracks.length} song${tracks.length === 1 ? "" : "s"}`;
}


function markActiveTrack(index, isPlaying) {
  document.querySelectorAll(".track").forEach((el) => {
    const active = Number(el.dataset.index) === index;
    el.classList.toggle("is-active", active);
    el.classList.toggle("is-playing", active && isPlaying);
  });
}


function setTrackDuration(index, seconds) {
  const row = document.querySelector(`.track[data-index="${index}"]`);
  if (!row) return;
  const timeEl = row.querySelector(".track__col-time");
  if (timeEl) timeEl.textContent = formatTime(seconds);
}
