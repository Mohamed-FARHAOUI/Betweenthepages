# 🎧 Between the Pages

A private, Spotify-inspired music player built for reading sessions.

**Between the Pages** is a mobile-first Progressive Web App (PWA) for creating a personal soundtrack around books, stories, and reading moments. It provides a Spotify-inspired interface, persistent audio controls, optional track metadata, and offline playback after the soundtrack has been saved.

## ✨ Features

* 🎵 Spotify-inspired music player
* 📱 Mobile-first responsive design
* 💻 Desktop and tablet support
* ▶️ Play / pause / next / previous controls
* 🔀 Shuffle and repeat
* 🎚️ Progress and volume controls
* 📚 Organize tracks around books or reading sessions
* 📖 Optional page references
* 📝 Optional track notes
* 🎨 Custom artwork for every track
* 📲 Progressive Web App support
* 📡 Offline playback after saving
* 💾 Service Worker caching
* 🏠 Installable on supported devices
* ⚡ No frontend framework required
* 🧩 Built with vanilla HTML, CSS, and JavaScript

---

## 🖥️ Preview

> Add screenshots or a demo GIF here.

```text
screenshots/
├── desktop.png
├── mobile.png
└── player.png
```

You can later add:

```markdown
![Desktop Preview](screenshots/desktop.png)
![Mobile Preview](screenshots/mobile.png)
```

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **Web Audio / HTMLAudioElement**
* **Service Worker API**
* **Web App Manifest**
* **Local caching**
* **Responsive CSS**

No React.
No Vue.
No Angular.
No Bootstrap.
No Tailwind.

The project is intentionally lightweight and dependency-free.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/Mohamed-FARHAOUI/Betweenthepages.git
cd between-the-pages
```

## 2. Add your audio

Place your audio files inside:

```text
audio/
```

Example:

```text
audio/
├── 01-skinny-love.mp3
├── 02-fade-into-you.mp3
├── 03-wait.mp3
└── ...
```

## 3. Configure the playlist

Open:

```text
js/playlist.js
```

Add your tracks to the `tracks` array:

```js
{
    title: "Example Song",
    artist: "Example Artist",
    file: "audio/example-song.mp3",
    artwork: "images/artwork/example.jpg",
    book: "",
    page: "",
    note: ""
}
```

### Available fields

| Field     | Required | Description                       |
| --------- | -------- | --------------------------------- |
| `title`   | Yes      | Song title                        |
| `artist`  | Yes      | Artist name                       |
| `file`    | Yes      | Path to the audio file            |
| `artwork` | No       | Track artwork                     |
| `book`    | No       | Associated book                   |
| `page`    | No       | Page reference                    |
| `note`    | No       | Optional personal/contextual note |

You can leave optional fields empty:

```js
{
    title: "Example Song",
    artist: "Example Artist",
    file: "audio/example.mp3",
    artwork: "",
    book: "",
    page: "",
    note: ""
}
```

---

# 🎨 Artwork

Artwork is optional.

Place images inside:

```text
images/artwork/
```

Then reference them:

```js
artwork: "images/artwork/01.jpg"
```

Square images are recommended.

If no artwork is provided, the player automatically displays a generated fallback background.

---

# 📖 Book & Page Metadata

Tracks can optionally be associated with a book and page.

Example:

```js
{
    title: "Example Song",
    artist: "Example Artist",
    file: "audio/example.mp3",
    artwork: "images/artwork/example.jpg",
    book: "Book I",
    page: "87",
    note: "A song I kept coming back to."
}
```

The metadata is optional and can be used to connect songs with specific reading moments.

Do not add fictional page numbers or memories. If you don't have meaningful metadata for a track, leave the fields empty.

---

# 📲 Offline Mode

Between the Pages uses a Service Worker to provide offline functionality.

When the user selects:

> **Save for Offline**

the application caches:

* HTML
* CSS
* JavaScript
* artwork
* required application assets
* soundtrack audio files

After caching is complete, the application can continue working without an internet connection.

The interface then displays:

> **The Soundtrack Is Yours**

### Important

The application must be opened through:

* HTTPS
* localhost

Service Workers do not work correctly when opening the project directly using:

```text
file://
```

---

# 🧪 Run Locally

From the project directory:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

For Windows:

```bash
py -m http.server 8000
```

You can then access the application from another device on the same local network using your computer's local IP address.

---

# 🌐 Deployment

Between the Pages is a static web application and can be deployed to most static hosting platforms.

Compatible platforms include:

* GitHub Pages
* Cloudflare Pages
* Netlify
* Vercel
* Any HTTPS static web server

After deployment, make sure the application is served through **HTTPS**.

---

# 📱 Installing the PWA

On supported browsers, users can install Between the Pages directly to their device.

On mobile, the installed application can behave similarly to a standalone music application.

The project includes:

```text
manifest.json
```

and:

```text
sw.js
```

which provide the PWA functionality.

---

# 📁 Project Structure

```text
between-the-pages/
│
├── index.html
├── manifest.json
├── sw.js
│
├── css/
│   └── style.css
│
├── js/
│   ├── playlist.js
│   ├── player.js
│   ├── offline.js
│   └── app.js
│
├── audio/
│   └── *.mp3
│
├── images/
│   └── artwork/
│       └── *.jpg
│
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
│
└── screenshots/
    └── ...
```

### JavaScript modules

**`playlist.js`**

Contains track data and playlist rendering.

**`player.js`**

Handles:

* audio playback
* controls
* progress
* volume
* track switching
* shuffle
* repeat

**`offline.js`**

Handles:

* Service Worker registration
* offline caching
* save-for-offline functionality
* offline state

**`app.js`**

Handles:

* application initialization
* landing screen
* UI interactions
* module wiring

---

# 🔐 Privacy

Between the Pages is designed as a client-side application.

No account is required.

No personal information needs to be collected.

The application can operate entirely from the user's device after the required assets have been cached.

---

# ⚠️ Audio & Copyright

This project provides the **player and application framework**, not copyrighted music.

Only use audio files that you have the legal right to distribute or use with the application.

Do not commit copyrighted commercial music to a public repository unless you have the appropriate permission or license.

For public demos, consider using:

* original music
* royalty-free music
* Creative Commons music with compatible licenses
* properly licensed audio
* short authorized previews

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "Add my feature"
```

4. Push the branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

---

# 📄 License

Add your preferred license here.

For example:

```text
MIT License
```

---

## 🎧 Philosophy

Between the Pages is built around a simple idea:

> **Sometimes a story is remembered not only by the words on the page, but by what was playing while you read them.**

---

### ⭐ If you like the project

Give the repository a star and feel free to build your own version.

**Between the Pages — a soundtrack for the stories we keep.**
