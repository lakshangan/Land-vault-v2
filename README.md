<div align="center">

# 🏛️ LandVault

### Real-World Asset Tokenization Protocol 

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**LandVault bridges physical real-world assets and blockchain technology — enabling fractional ownership, transparent on-chain registries, and automated revenue distribution for land, buildings, energy infrastructure, and more.**

[🐛 Report Bug](https://github.com/lakshangan/Land-vault-v2/issues) · [✨ Request Feature](https://github.com/lakshangan/Land-vault-v2/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🏦 About the Project

**LandVault** is an on-chain Real-World Asset (RWA) protocol that transforms physical assets — land, real estate, solar farms, wind energy, and infrastructure — into tokenized, investable instruments.

By combining **ERC-721 NFTs** for asset representation with **ERC-20 fractional tokens**, LandVault opens global investment opportunities to anyone, anywhere, at any scale. Smart contracts automate revenue distribution, ownership records, and governance — making the entire lifecycle of asset investment transparent and trustless.

### 🎯 Why LandVault?

| Problem | LandVault Solution |
|---|---|
| High barriers to real estate investment | Fractional ownership from any amount |
| Opaque ownership records | On-chain immutable registry |
| Slow and costly asset transfers | Instant token-based trading |
| Manual revenue distribution | Automated smart contract payouts |
| Illiquid real-world assets | Global DeFi-ready liquidity layer |

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Real Estate Tokenization** | Tokenize land, buildings, and property assets into on-chain investment instruments |
| ⚡ **Renewable Energy Assets** | Invest in solar farms, wind energy, and infrastructure producing real-world value |
| 🏗️ **Infrastructure Investments** | Access logistics facilities, telecom towers, and industrial assets |
| 🔀 **Fractional Ownership** | Divide large assets into smaller tokens accessible to global investors |
| 🌍 **Global Asset Marketplace** | Buy, sell, and manage tokenized assets across blockchain networks |
| 🧠 **AI Asset Valuation** | Advanced analytics providing valuation insights and investment intelligence |
| 🔐 **On-Chain Ownership Registry** | Transparent ownership records secured through blockchain technology |
| 💸 **Automated Revenue Distribution** | Smart contracts distribute income from assets directly to token holders |

---

## 🛠️ Tech Stack

### Frontend (Landing Page)

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.1.6 | Full-stack React framework |
| **React** | 19.2.3 | UI component library |
| **TypeScript** | 5.x | Type safety |
| **Framer Motion** | 12.x | Animations & transitions |
| **Three.js / R3F** | 0.183.x | 3D WebGL background visuals |
| **Lucide React** | 0.577.x | Icon library |

### Application (Frontend DApp)

| Technology | Version | Purpose |
|---|---|---|
| **React + Vite** | Latest | Fast DApp bundler |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Ethers.js** | Latest | Blockchain interaction |

### Backend API

| Technology | Version | Purpose |
|---|---|---|
| **Node.js + Express** | 4.x | REST API server |
| **TypeScript** | 5.x | Type-safe backend |
| **Prisma ORM** | 5.14.x | Database abstraction |
| **PostgreSQL** | Latest | Primary database |
| **JWT + bcryptjs** | Latest | Authentication |
| **Helmet + CORS** | Latest | Security middleware |

### Blockchain Infrastructure

| Technology | Purpose |
|---|---|
| **BNB Chain** | Smart contract deployment network |
| **ERC-721** | NFT standard for asset representation |
| **ERC-20** | Fractional ownership token standard |
| **Solidity** | Smart contract language |
| **IPFS** | Decentralized document & metadata storage |

---

## 🏗️ Architecture

```
LandVault
├── 📦 Landing Page (Next.js)           — Marketing & protocol overview
│   └── src/
│       ├── app/                         — Next.js App Router
│       └── components/
│           ├── Hero.tsx                 — Main hero section
│           ├── Features.tsx             — Feature highlights
│           ├── Solution.tsx             — Protocol solution overview
│           ├── HowItWorks.tsx           — Step-by-step user flow
│           ├── Tokenomics.tsx           — Token model explanation
│           ├── TechStack.tsx            — Technology showcase
│           ├── Roadmap.tsx              — Development timeline
│           ├── Map.tsx                  — Asset location map
│           ├── Ecosystem.tsx            — Ecosystem participants
│           ├── Vision.tsx               — Long-term vision
│           ├── ProtocolFlow.tsx         — On-chain transaction flow
│           └── Preloader.tsx            — Animated page loader
│
└── 📦 applicationfrback/               — Monorepo (Backend + DApp)
    ├── apps/
    │   ├── backend/                     — Express REST API
    │   │   ├── src/
    │   │   │   ├── routes/              — API route handlers
    │   │   │   ├── config/              — Environment & app config
    │   │   │   └── utils/               — Helper utilities
    │   │   └── prisma/
    │   │       └── schema.prisma        — Database schema
    │   │
    │   └── frontend/                    — React DApp (Vite)
    │       └── src/                     — DApp components & pages
    │
    └── packages/                        — Shared packages/types
```

### Database Schema Overview

The backend manages these core entities:

- **User** — Wallet address, KYC status, role, email
- **Asset** — Property details, GPS coordinates, token supply, APY, IPFS metadata
- **Holding** — User ↔ Asset fractional ownership records
- **Transaction** — On-chain transaction history
- **Vote** — Governance voting records

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (for backend)
- A Web3 wallet (MetaMask or compatible)

---

### 1. Clone the Repository

```bash
git clone https://github.com/lakshangan/Land-vault-v2.git
cd Land-vault-v2
```

---

### 2. Landing Page (Next.js)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

### 3. Backend API

```bash
cd applicationfrback/apps/backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and secrets

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

The API server starts at `http://localhost:4000`.

---

### 4. Frontend DApp

```bash
cd applicationfrback/apps/frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

---

### Environment Variables

Create a `.env` file in `applicationfrback/apps/backend/`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/landvault"
JWT_SECRET="your-secure-jwt-secret"
PORT=4000
NODE_ENV=development
```

---

## 📁 Project Structure

```
Land-vault-v2/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout & metadata
│   │   ├── page.tsx             # Home page composition
│   │   └── globals.css          # Global styles
│   └── components/              # Landing page components
│
├── applicationfrback/
│   ├── apps/
│   │   ├── backend/             # Node.js + Express API
│   │   └── frontend/            # React + Vite DApp
│   ├── packages/                # Shared utilities & types
│   └── package.json             # Monorepo workspace config
│
├── public/                      # Static assets (SVGs, icons)
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
└── package.json                 # Root dependencies
```

---

## 🗺️ Roadmap

| Phase | Title | Timeline | Status |
|---|---|---|---|
| **Phase 1** | Protocol Infrastructure | Q4 2025 | ✅ Completed |
| **Phase 2** | Asset Tokenization | Q1 2026 | 🟢 Active |
| **Phase 3** | Fractional Investment Marketplace | Q3 2026 | 🔜 Upcoming |
| **Phase 4** | Global RWA Marketplace | 2027 | 📋 Planning |

**Phase 1 — Protocol Infrastructure** ✅
Core protocol deployment and land tokenization infrastructure launch. Initial pilot plots in US/UK markets.

**Phase 2 — Asset Tokenization** 🟢
Scaling tokenization across real estate and renewable energy assets. Integration with institutional asset managers.

**Phase 3 — Fractional Investment** 🔜
Launch of the global fractional investment marketplace. Automated revenue distribution and asset monitoring dashboards.

**Phase 4 — Global RWA Marketplace** 📋
Expansion into emerging infrastructure markets. Universal liquidity layer connecting on-chain investors with physical assets worldwide.

---

## 🤝 Contributing

Contributions are what make the open-source community such a great place to learn and build. Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

Please make sure your code follows the existing style and all linting passes (`npm run lint`).

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**LandVault Protocol**

- GitHub: [@lakshangan](https://github.com/lakshangan)
- Repository: [Land-vault-v2](https://github.com/lakshangan/Land-vault-v2)
- Issues: [Report a bug or request a feature](https://github.com/lakshangan/Land-vault-v2/issues)

---

<div align="center">


*Tokenizing the physical world, one asset at a time.*

</div>
