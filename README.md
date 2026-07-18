
---

## 📝 **Portfolio**

```markdown
# Sadaan Ansari | Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

> Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing my work, skills, and experience as a Software Developer.

## 🚀 Live Demo

[Visit my portfolio]()

## ✨ Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS 4** with dark/light theme
- 📱 **Fully Responsive** design
- 🎭 **Smooth Animations** with Framer Motion
- 🔍 **Command Palette** (⌘K) for quick navigation
- 🌙 **Dark/Light Mode** toggle
- 📬 **Contact Form** with EmailJS integration
- 📄 **Resume Download** functionality
- 🖼️ **Interactive Image Hover** effects
- 🎯 **SEO Optimized** with metadata
- 📊 **Analytics** with Vercel Analytics
- 🎨 **Custom Favicon** with initials

## 🛠️ Tech Stack

### Framework & Libraries
- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Styling
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animations

### Features
- [EmailJS](https://www.emailjs.com/) - Email sending
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Vercel Analytics](https://vercel.com/analytics) - Performance tracking
- [CMDK](https://cmdk.paco.me/) - Command palette

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   └── page.tsx          # Blog page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── animations/           # Animation components
│   ├── sections/
|   |   └── experience.tsx    # Experience page
|   |   └── contact.tsx       # Contact page
|   |   └── projects.tsx      # Projects page
│   ├── shared/               # Shared components
│   └── ui/                   # Shadcn UI components
├── public/
│   ├── icons/                # Favicon files
│   └── projects/             # Project images
├── scripts/
│   └── generate-favicon.ts   # Favicon generator
├── .env.local                # Environment variables
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AnsariSadaan/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# EmailJS Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Site URL (for metadata)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** to view it in the browser.

## 🎨 Customization

### Change Personal Information
1. Update name, title, and description in `app/layout.tsx`
2. Replace profile images in `public/` folder
3. Update social links in `components/sections/Hero.tsx`
4. Modify projects data in `components/sections/Projects.tsx`
5. Update experience data in `components/sections/Experience.tsx`

### Change Colors
Modify the theme colors in `app/globals.css`:
```css
:root {
  --primary: 262.1 83.3% 57.8%;  /* Your primary color */
  /* ... other color variables */
}
```

### Generate Favicon
```bash
npm run generate-favicon
# or
npx tsx scripts/generate-favicon.ts
```

### Build for Production
```bash
npm run build
npm run start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Large screens (1280px+)


## 📧 Contact Form

The contact form uses EmailJS. To set it up:
1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Create a new email service and template
3. Add your credentials to `.env.local`

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AnsariSadaan/portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables
4. Deploy!


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sadaan Ansari**
- GitHub: [@AnsariSadaan](https://github.com/AnsariSadaan)
- LinkedIn: [Sadaan Ansari](https://www.linkedin.com/in/sadaan-ansari-82a191214/)
- Twitter: [@sadaan_18](https://x.com/sadaan_18)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting platform
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

---

## 📸 Screenshots

<details>
<summary>Click to see screenshots</summary>

### Home Page
![Home Page](/public/projects/portfolioHomePage.png)

### Projects Section
![Projects Section](/public/projects/portfolioProjectPage.png)

### Dark Mode
![Dark Mode](/public/projects/portfolioDarkTheme.png)

</details>

---

## 📞 Support

For support, email ansarisadaan72@gmail.com or open an issue in the repository.

---

⭐ Star this repository if you found it helpful!
```

---


### **`LICENSE`**
```
MIT License

Copyright (c) 2026 Sadaan Ansari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📂 **Create a `.gitignore` File**

### **`.gitignore`**
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# ide
.vscode/
.idea/
*.swp
*.swo
*~
```

---

```markdown
[![GitHub stars](https://img.shields.io/github/stars/AnsariSadaan/portfolio)](https://github.com/AnsariSadaan/portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AnsariSadaan/portfolio)](https://github.com/AnsariSadaan/portfolio/network)
[![GitHub issues](https://img.shields.io/github/issues/AnsariSadaan/portfolio)](https://github.com/AnsariSadaan/portfolio/issues)
[![GitHub license](https://img.shields.io/github/license/AnsariSadaan/portfolio)](https://github.com/AnsariSadaan/portfolio/blob/main/LICENSE)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://vercel.com/)
```
