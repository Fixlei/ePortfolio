# ePortfolio

A personal portfolio website showcasing my projects, technical skills, and background as a Computer Science graduate student.

**Live site:** https://fixlei.github.io/ePortfolio/

---

## Overview

This is a responsive, single-page portfolio website built from scratch with vanilla HTML, CSS, and JavaScript — no frameworks or build tools. It presents featured projects, a technical stack, and education history in a clean, accessible layout that adapts across desktop, tablet, and mobile screens.

The project was developed as a hands-on exercise in front-end fundamentals: semantic markup, CSS custom properties, responsive design with media queries, and lightweight DOM interactivity.

---

## Features

- **Responsive layout** — Adapts from a two-column desktop view to a single-column mobile view using CSS Grid and media queries.
- **Custom color system** — Centralized theming through CSS custom properties (\`:root\` variables) for consistent, maintainable styling.
- **Scroll-reveal animations** — Sections fade in on scroll using the Intersection Observer API.
- **Sticky navigation** — Fixed navbar with active-link highlighting and a mobile hamburger menu.
- **Card-based sections** — Consistent card styling across About, Projects, and Experience for visual coherence.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 (Grid, Flexbox, custom properties, media queries) |
| Interactivity | Vanilla JavaScript (ES6+, Intersection Observer) |
| Fonts | Google Fonts (DM Sans, Space Mono) |
| Deployment | GitHub Pages |

---

## Project Structure

\`\`\`
ePortfolio/
├── index.html              # Main single-page layout
├── css/
│   ├── style.css           # Core styles, layout, theming, responsive rules
│   └── animations.css      # Entrance and scroll-reveal animations
├── js/
│   └── main.js             # Navigation toggle, scroll effects, reveal logic
├── assets/
│   └── images/             # Avatar and background images
└── README.md
\`\`\`

---

## Getting Started

### Prerequisites

No build tools or dependencies are required. You only need:

- A modern web browser
- (Optional) A code editor such as IntelliJ IDEA or VS Code

### Running Locally

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Fixlei/ePortfolio.git
   \`\`\`

2. Navigate into the project directory:
   \`\`\`bash
   cd ePortfolio
   \`\`\`

3. Open \`index.html\` directly in your browser, or use a local server for live reload (for example, IntelliJ IDEA's built-in preview or the VS Code Live Server extension).

---

## Deployment

The site is deployed via **GitHub Pages** from the \`main\` branch. Any push to \`main\` automatically updates the live site.

To deploy your own copy:

1. Push your code to a public GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select the \`main\` branch and the \`/ (root)\` folder.
4. Save. The site publishes at \`https://<username>.github.io/<repository>/\`.

---

## License

This project is released under the MIT License. Feel free to use the code as a reference or template for your own portfolio.
