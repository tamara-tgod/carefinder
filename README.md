# Carefinder 

A civic health tool that helps Nigerians find, export, and share hospital information. Carefinder addresses a real access-to-healthcare gap by providing a searchable, shareable, and exportable hospital directory with role-based admin tools.

**Live Demo:** [https://carefinder-lac.vercel.app/]  
**GitHub:** [https://github.com/tamara-tgod/carefinder]

---

## Features

### For Public Users
- Search hospitals by name, city, or Local Government Area (LGA)
- Filter by specialty (emergency, maternity, dental, pediatric, etc.) and ownership type (public/private)
- View results on an interactive Mapbox map alongside a sortable list
- Radius-based search using browser geolocation — "hospitals within 10km of me"
- Hospital detail page with full contact info, specialties, visiting hours, and location map
- Export filtered results to CSV using PapaParse
- Generate and share human-readable links that reproduce exact search results
- Send curated hospital lists via email using the Resend API

### For Admin Users
- Secure email/password login via Supabase Auth
- Protected dashboard to manage hospital entries
- Create and edit hospital entries using a Markdown editor with live preview
- Upload hospital images via Supabase Storage
- Moderate user reviews (approve/hide)
- Role-based access enforced at the database layer via Supabase RLS policies

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Backend / DB | Supabase (Postgres + PostGIS) |
| Authentication | Supabase Auth with Role-based RLS |
| Map | Mapbox GL JS |
| CSV Export | PapaParse |
| Email Sharing | Resend API |
| Markdown Editor | react-md-editor |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Supabase account
- A Mapbox account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tamara-tgod/carefinder
cd carefinder
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Database Schema

The app uses three core tables:

**hospitals** — stores all hospital records including geospatial coordinates for map queries

**profiles** — extends Supabase Auth users with role information (admin/user)

**reviews** — stores user ratings and text reviews with moderation status (pending/approved/hidden)

Row Level Security (RLS) is enabled on all tables. Public users can read hospital data without authentication. Only admin users can create, update, or delete hospital entries.

---

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── login/        # Admin login page
│   │   └── page.tsx      # Protected admin dashboard
│   ├── hospitals/
│   │   └── [id]/         # Hospital detail page
│   └── page.tsx          # Homepage with search and map
├── components/           # Reusable UI components
├── lib/                  # Supabase client setup
├── services/             # Database query functions
└── types/                # TypeScript interfaces
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Your Mapbox public access token |

---

## Capstone Project

This project was built as a capstone for the Frontend Engineering diploma program at [AltSchool Africa](https://altschoolafrica.com). It demonstrates proficiency in:

- Next.js App Router with Server and Client Components
- Full-stack development with Supabase
- Geospatial data and interactive maps
- Role-based authentication and authorization
- TypeScript, Tailwind CSS, and modern React patterns

---

## Author

**Itemearau Faith ThankGod**  
Frontend Engineering Student, AltSchool Africa  
GitHub: [@Tamara-tgod](https://github.com/Tamara-tgod)  
X: [@tamara_builds](https://x.com/tamara_builds)