# Mohamed Azan Abdul Rahman — Personal Portfolio

A modern, premium-quality multi-page personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Multi-page architecture** with 8 distinct pages (Home, About, Education, Achievements, Leadership, Skills, Activities, Contact)
- **Premium design** with elegant typography (Playfair Display + Inter) and sophisticated color palette
- **Dark/Light theme** switcher with local storage persistence
- **Responsive navigation** with mobile hamburger menu
- **Smooth animations** using Framer Motion
- **Achievement filtering** on the Awards page
- **SEO optimization** with meta tags and Open Graph metadata
- **Contact form** with mailto fallback
- **CV download** functionality

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd azan-portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navbar, Footer, Timeline, Cards)
├── pages/          # Page components (Home, About, Education, etc.)
├── data/           # Content data (profile, education, achievements, etc.)
├── hooks/          # Custom React hooks (useTheme)
├── App.tsx         # Main app with routing
└── main.tsx        # Entry point
```

## Customization

### Updating Content

All content is stored in the `src/data/` directory:

- `profile.ts` - Personal information and contact details
- `education.ts` - Educational journey and qualifications
- `achievements.ts` - Awards and achievements
- `leadership.ts` - Leadership roles and experience
- `skills.ts` - Technical and soft skills
- `activities.ts` - Volunteering and activities

### Updating CV

Replace the placeholder `public/cv.pdf` with the actual CV file.

### Styling

The color palette and fonts are configured in `tailwind.config.js`:

- Primary colors: Navy (#101B32), White (#FFFFFF), Soft Grey (#F4F6FA)
- Accent colors: Muted Gold (#C6A45C), Blue (#5477A8)
- Fonts: Playfair Display (headings), Inter (body)

## Deployment

### Vercel

1. Push the code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports static sites (Netlify, GitHub Pages, etc.) by building the project and deploying the `dist` folder.

## Environment Variables

No environment variables are required for basic functionality. If you add backend features (e.g., Firebase for CMS), create a `.env` file based on `.env.example`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is the personal portfolio of Mohamed Azan Abdul Rahman. All rights reserved.

## Contact

- Email: mohamed.azan.ar@gmail.com
- Phone: +960 9303223
- Location: Ma. Dhanas, Malé
