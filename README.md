# Layouter 🎯

**Layouter** is a visual playground for Flexbox and CSS Grid. Instantly create, experiment, and preview modern layouts without writing a single line of code.

- 📷 [Screenshot](./screenshot.png)

- 🌐 [Live Demo](https://yourusername.github.io/layouter)

---

## ✨ Features

- 🔳 **Flexbox & Grid Modes** – Switch easily between layout types
- 🎛️ **Drag-and-Drop Interface** – Build your layout visually
- 📐 **Real-time CSS Output** – Copy the exact code anytime
- 📱 **Responsive Preview** – Test across screen sizes
- 💾 **Export Layout** – Download or copy HTML/CSS instantly

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)

---

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/yourusername/layouter.git
cd layouter
npm install
npm run dev
```

````

---

## 📂 Folder Structure

```
layouter/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   └── App.jsx
└── package.json
```


````

🟥 Top Bar (Header)
└── Project Name: Layouter
└── Layout Type Toggle: [Flexbox] [Grid]

🟦 Main Body
├── Sidebar (Tools)
│ └── Settings:
│ - Direction (row, column)
│ - Alignment (justify, align)
│ - Gap, item count, etc.
│
└── Layout Preview (Canvas)
└── Live layout visualization

🟩 Footer
└── Copy/Download CSS
└── Link to documentation

```

```

┌───────────────────────────────────────────────┐
│ 🎯 Flex & Grid Playground │ ← Header
├───────────────────────────────────────────────┤
│ [ Flex ] [ Grid ] │ ← Mode toggle buttons
├───────────────────────────────────────────────┤
│ Settings Panel (Sidebar: Flex or Grid) │ ← Settings Panel
│ ┌─────────────┬──────────────────────────┐ │
│ │ Settings │ Live Preview Area │ │
│ │ Flex/Grid │ + Visual Box Elements │ │
│ └─────────────┴──────────────────────────┘ │
├───────────────────────────────────────────────┤
│ 💻 Generated CSS │ ← Auto-updated code viewer
│ display: flex; │
│ justify-content: center; │
│ align-items: center; │
│ gap: 10px; │
└───────────────────────────────────────────────┘

```

```
