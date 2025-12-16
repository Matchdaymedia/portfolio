# Portfolio - Fotos & Videos

Ein modernes Portfolio-Projekt zur Präsentation deiner kreativen Arbeiten.

## 🚀 Features

- ✨ Moderne, responsive Galerie
- 🖼️ Unterstützung für Fotos und Videos
- 🎯 **5 Kategorien für verschiedene Arbeitsbereiche:**
  - 🎨 Unternehmensgrafiken
  - 📸 Produktfotos
  - 🎬 Produktvideos
  - 📱 Reels & TikTok Videos
  - ⚽ Sport Content (Grafiken & Videos)
- 🔍 **Erweiterte Filter:**
  - Filter nach Medien-Typ (Alle, Fotos, Videos)
  - Filter nach Kategorien
  - Kategorien-Übersichtsseite
- 🛠️ **Tools & Skills Anzeige:**
  - Canva, Photoshop, Premiere Pro, CapCut
  - Filmen, Cutten, Fotografie
- 🎨 Lightbox für Vollbildansicht mit detaillierten Informationen
- 📱 Mobile-optimiert
- ⚡ Schnell und performant mit Vite

## 📦 Installation

1. Dependencies installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Build für Produktion:
```bash
npm run build
```

## 🚀 Netlify Deployment

### Option 1: Netlify Drop (Schnellster Weg)

1. **Build lokal erstellen:**
```bash
npm install
npm run build
```

2. **Zu Netlify Drop gehen:**
   - Öffne [Netlify Drop](https://app.netlify.com/drop)
   - Ziehe den gesamten `portfolio` Ordner in den Drop-Bereich
   - Warte auf den Build

### Option 2: Git Integration (Empfohlen)

1. **Repository auf GitHub pushen:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <dein-repo-url>
git push -u origin main
```

2. **Netlify mit Git verbinden:**
   - Gehe zu [Netlify](https://app.netlify.com)
   - Klicke auf **"Add new site" → "Import an existing project"**
   - Wähle dein Git-Provider (GitHub/GitLab)
   - Wähle dein Repository aus

3. **Build-Einstellungen konfigurieren:**
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18` (oder neuer)

4. **Deploy:**
   - Klicke auf **"Deploy site"**
   - Netlify baut automatisch deine App

### Option 3: Netlify CLI

1. **Netlify CLI installieren:**
```bash
npm install -g netlify-cli
```

2. **Login:**
```bash
netlify login
```

3. **Im Portfolio-Verzeichnis:**
```bash
cd portfolio
netlify init
```

4. **Deploy:**
```bash
netlify deploy --prod
```

## 📁 Projektstruktur

```
portfolio/
├── public/
│   ├── images/
│   │   ├── unternehmensgrafiken/  # Unternehmensgrafiken
│   │   ├── produktfotos/          # Produktfotos
│   │   └── sportcontent/          # Sport-Grafiken
│   └── videos/
│       ├── produktvideos/          # Produktvideos
│       ├── reels-tiktok/           # Reels & TikTok Videos
│       └── sportcontent/           # Sport-Videos
├── src/
│   ├── components/                # React-Komponenten
│   ├── data/                      # Medien-Daten
│   ├── types/                     # TypeScript-Typen
│   └── ...
└── ...
```

## 🎨 Eigene Medien hinzufügen

1. **Medien-Dateien hinzufügen:**
   - Fotos in `public/images/` ablegen (am besten in Unterordnern nach Kategorien)
   - Videos in `public/videos/` ablegen (am besten in Unterordnern nach Kategorien)

2. **Daten aktualisieren:**
   - Öffne `src/data/mediaItems.ts`
   - Füge deine Medien mit den korrekten Pfaden hinzu
   - Beispiel:
   ```typescript
   {
     id: 'neue-id',
     type: 'photo',
     title: 'Mein Produktfoto',
     description: 'Hochwertige Produktfotografie',
     url: '/images/produktfotos/mein-foto.jpg',
     category: 'produktfotos',
     date: '2024-01-01',
     tools: ['fotografie', 'photoshop'],
     client: 'Kundenname', // Optional
   }
   ```

3. **Verfügbare Kategorien:**
   - `unternehmensgrafiken` - Grafiken für Unternehmen
   - `produktfotos` - Produktfotografie
   - `produktvideos` - Produktvideos
   - `reels-tiktok` - Reels & TikTok Videos
   - `sportcontent` - Sport Content (Grafiken & Videos)

4. **Verfügbare Tools:**
   - `canva`, `photoshop`, `premiere-pro`, `capcut`
   - `filmen`, `cutten`, `fotografie`

## 🛠️ Technologien

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## 📝 Anpassungen

- **Farben:** Bearbeite `tailwind.config.js`
- **Layout:** Passe die Komponenten in `src/components/` an
- **Styling:** Nutze Tailwind CSS Klassen oder bearbeite `src/index.css`

## ✅ Aktueller Status

- ✅ Alle Medien-Dateien eingebunden
- ✅ 15 Unternehmensgrafiken
- ✅ 12 Produktfotos
- ✅ 3 Produktvideos
- ✅ 6 Sport-Grafiken
- ✅ 7 Sport-Videos
- ✅ Netlify-Konfiguration vorbereitet
