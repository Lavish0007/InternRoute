# InternRoute - Internship Path Advisor

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/yourusername/internroute/actions/workflows/node.js.yml/badge.svg)](https://github.com/yourusername/internroute/actions)

## 🚀 Overview
InternRoute is an Edtech platform designed to help college students navigate internship opportunities through structured learning paths and curated resources. The platform addresses key challenges students face in securing tech internships by providing domain-specific roadmaps, skill prioritization guidance, and smart internship matching.

## 📋 Problem Statement
College students face several barriers when seeking tech internships:
- Lack of structured guidance for skill development
- Resource overload and confusion in learning paths
- Fragmented internship listings across platforms
- Difficulty tracking progress and measuring readiness

## ✨ Solution Highlights
### Key Features
- **Structured Learning Paths**: Step-by-step guides for Web Dev, AI/ML, and Mobile Dev
- **Curated Resource Hub**: Handpicked tutorials from platforms like Coursera and freeCodeCamp
- **Smart Internship Matching**: Real-time listings from LinkedIn/Indeed with advanced filters
- **Progress Tracking**: Monitor skill development and readiness metrics
- **Community Ratings**: Quality-controlled resources through peer reviews

## 🛠️ Technology Stack
- **Frontend**: React + TypeScript + Vite
- **UI Components**: shadcn-ui
- **Styling**: Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB
- **APIs**: Internship listing aggregators

## ⚙️ System Architecture
```mermaid
graph TD
    A[Frontend] --> B[Backend]
    B --> C[Roadmap Generation]
    C --> D[Internship API]
    D --> E[MongoDB Storage]
