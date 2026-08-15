
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
   
  {
    title: "آه يا حلو - ناي البرغوثي  Ah Ya Helou - Nai Barghouthi",
    artist: "Nai Barghouthi",
    file: "آه يا حلو - ناي البرغوثي Ah Ya Helou - Nai Barghouthi.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "For a moment, forget everything else. Just smile. You look beautiful when you do."
  },
  {
    title: "Majida El Roumi - Kalimat  ماجدة الرومي - كلمات",
    artist: "Majida El Roumi ",
    file: "Majida El Roumi - Kalimat  ماجدة الرومي - كلمات.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "Some people are difficult to describe. Not because there aren't enough words, but because somehow none of them feel enough."
  },
  {
    title: "يا انا يا انا - فيروز  Ya Ana Ya Ana - Fairuz",
    artist: "Fairuz",
    file: "يا انا يا انا - فيروز  Ya Ana Ya Ana - Fairuz.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "There are songs that don't need to be understood. They just need to be felt."
  },
  {
    title: "Fadl Shaker & Yara - Akhedni Maak  Official Music Video  فضل شاكر و يارا - خدنى معك",
    artist: "Fadl Shaker & Yara",
    file: "Fadl Shaker & Yara - Akhedni Maak  Official Music Video  فضل شاكر و يارا - خدنى معك.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "If I could keep one thing from every place I've been, I'd choose the moments that made me think of you."
  },
  {
    title: "بروحي فتاه بطيء",
    artist: "radiohead",
    file: "بروحي فتاه بطيء.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "There is a strange kind of beauty in realizing that someone has quietly found a place inside your thoughts."
  },
  {
    title: "Siilawy - لما تكوني (Official Music Video)",
    artist: "Siilawy",
    file: "Siilawy - لما تكوني (Official Music Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "Some days are ordinary. And then you appear in them somehow, and they aren't."
  },
  {
    title: "Siilawy - قدام الكل (Official Music Video)",
    artist: "Siilawy",
    file: "Siilawy - قدام الكل (Official Music Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "If I ever had to choose one person to write about without hiding the truth, it would be you."
  },
  {
    title: "Al Shami - Sametek Sama [Official Lyric Video] (2023)  الشامي - سميتك سما",
    artist: "Al Shami",
    file: "Al Shami - Sametek Sama [Official Lyric Video] (2023)  الشامي - سميتك سما.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "I think some people deserve names that sound like places you could disappear into."
  },
  {
    title: "مهرة - اسماعيل تمر Ft أوكتاي  Mohra - Ismaeil Tamr Ft Oktay",
    artist: "Ismaeil Tamr Ft Oktay",
    file: "مهرة - اسماعيل تمر Ft أوكتاي  Mohra - Ismaeil Tamr Ft Oktay.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "You have always had something difficult to explain. Maybe that's why I keep trying."
  },
  {
    title: "آه يا حلو - ناي البرغوثي  Ah Ya Helou - Nai Barghouthi",
    artist: "Nai Barghouthi",
    file: "آه يا حلو - ناي البرغوثي  Ah Ya Helou - Nai Barghouthi.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "For a moment, forget everything else. Just smile. You look beautiful when you do."
  },
  {
    title: "Wael Jassar - Btew7ashiny - Clear Version 4K l  وائل جسار - فيديو كليب بتوحشيني (نسخة محسنة)",
    artist: "Wael Jassar ",
    file: "Wael Jassar - Btew7ashiny - Clear Version 4K l  وائل جسار - فيديو كليب بتوحشيني (نسخة محسنة).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "ar",
    note: "Funny how someone can be nowhere near you and somehow still be everywhere."
  },
  {
    title: "Timbaland - Apologize ft. OneRepublic",
    artist: "Timbaland",
    file: "Timbaland - Apologize ft. OneRepublic.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Not every feeling arrives at the right time. Some simply arrive, and stay."
  },
  {
    title: "Justin Timberlake - Mirrors (Lyrics)",
    artist: "Justin Timberlake",
    file: "Justin Timberlake - Mirrors (Lyrics).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Sometimes you meet someone and start noticing pieces of yourself in the way they see the world."
  },
  {
    title: "Leona Lewis - Bleeding Love (US Version - Official Video)",
    artist: "Leona Lewis",
    file: "Leona Lewis - Bleeding Love (US Version - Official Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "There are feelings you can explain. And then there are the ones that simply refuse to be quiet."
  },
  {
    title: "Beyoncé - Halo",
    artist: "Beyoncé",
    file: "Beyoncé - Halo.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "You probably don't realize how much light you bring into ordinary moments."
  },
  {
    title: "Jordin Sparks, Chris Brown - No Air (Official Video) ft. Chris Brown",
    artist: "Jordin Sparks, Chris Brown",
    file: "Jordin Sparks, Chris Brown - No Air (Official Video) ft. Chris Brown.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Some people become so important that imagining life without them feels impossible."
  },
  {
    title: "Justin Timberlake - CAN'T STOP THE FEELING! (from DreamWorks Animation's TROLLS) (Official Video)",
    artist: "Justin Timberlake ",
    file: "Justin Timberlake - CAN'T STOP THE FEELING! (from DreamWorks Animation's TROLLS) (Official Video).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Not every song needs a complicated meaning. Sometimes someone simply makes you happy."
  },
  {
    title: "Mario - Let Me Love You (Lyrics)",
    artist: "Mario",
    file: "Mario - Let Me Love You (Lyrics).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Sometimes the simplest thing to say is the hardest thing to admit: I just want to love you the way you deserve."
  }, {
    title: "CÉLINE - Überall",
    artist: "CÉLINE",
    file: "CÉLINE - Überall.mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "Somehow, you end up everywhere. In songs. In places. In little memories I wasn't even trying to keep."
  },
  {
    title: "Amir - J'ai cherché (Clip officiel)",
    artist: "Amir",
    file: "Amir - J'ai cherché (Clip officiel).mp3",
    artwork: "",
    book: "Book I",
    page: "",
    lang: "en",
    note: "I went looking for something beautiful. Somehow, along the way, I found myself thinking of you."
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

  let lastLang = null;

  tracks.forEach((track, index) => {
    if (track.lang && track.lang !== lastLang) {
      const divider = document.createElement("li");
      divider.className = "playlist__divider";
      divider.setAttribute("aria-hidden", "true");
      divider.innerHTML = `<span>${track.lang === "ar" ? "أغاني عربية" : "English"}</span>`;
      list.appendChild(divider);
      lastLang = track.lang;
    }

    const li = document.createElement("li");
    li.className = "track";
    if (track.lang === "ar") li.classList.add("track--rtl");
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
