# AI Travel Planner Agent ✈️🌍

![IBM watsonx.ai](https://img.shields.io/badge/IBM-watsonx.ai-blue)
![IBM Cloud Lite](https://img.shields.io/badge/IBM-Cloud%20Lite-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![Python](https://img.shields.io/badge/Python-3.11-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38BDF8)

## Overview

AI Travel Planner Agent is an intelligent travel planning platform built using **IBM Cloud Lite** and **IBM watsonx.ai**.

The application helps travelers generate personalized travel plans, optimize budgets, discover attractions, receive travel recommendations, and create complete itineraries using AI-powered multi-agent orchestration.

The system analyzes:

* Destination Preferences
* Budget Constraints
* Travel Dates
* Number of Travelers
* Travel Interests
* Travel Style

and generates a complete travel experience within seconds.

---

## Key Features

### Personalized Travel Planning

Generate customized travel plans based on user preferences.

### Multi-Agent AI Architecture

Specialized AI agents collaborate to create high-quality recommendations.

### Budget Optimization

Estimate transportation, accommodation, food, and miscellaneous expenses.

### Smart Itinerary Generation

Generate detailed day-wise travel schedules.

### Hotel & Transport Recommendations

Suggest accommodation and transportation options.

### Travel Safety Guidance

Provide safety tips, alerts, and emergency information.

### Demo Mode Support

Works even without external API keys by generating realistic travel data.

### Premium Dashboard

Modern React dashboard with:

* Glassmorphism UI
* Responsive Design
* Interactive Cards
* Loading Animations

---

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* FastAPI
* Python

### AI Platform

* IBM watsonx.ai

### Cloud Services

* IBM Cloud Lite
* IBM Cloud Object Storage

---

---

## Multi-Agent Architecture

The system consists of the following agents:

| Agent                       | Responsibility                          |
| --------------------------- | --------------------------------------- |
| Destination Agent           | Recommends destinations and attractions |
| Budget Agent                | Calculates travel expenses              |
| Itinerary Agent             | Generates day-wise schedules            |
| Booking Agent               | Suggests hotels and transportation      |
| Travel Tips Agent           | Provides travel recommendations         |
| Alert Agent                 | Generates travel alerts                 |
| Local Guide Agent           | Recommends local experiences            |
| Weather Agent               | Provides weather context                |
| Schedule Optimization Agent | Improves travel efficiency              |
| Orchestrator Agent          | Combines all outputs                    |

---

## IBM watsonx.ai Integration

IBM watsonx.ai serves as the core AI engine for:

* Travel Recommendation Generation
* Itinerary Planning
* Budget Analysis
* Travel Safety Guidance
* Destination Discovery

The platform uses IBM foundation models through watsonx.ai APIs to generate intelligent travel recommendations.

---

## Demo Mode

If external APIs are unavailable:

* Mock Weather Data
* Mock Travel Alerts
* Mock Maps
* Demo Hotel Recommendations
* Demo Transportation Suggestions

are automatically generated.

This ensures uninterrupted demonstrations during hackathons and presentations.

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/VaishnaviRaut2004/AI-Travel-Planner-Agent.git
cd AI-Travel-Planner-Agent
```

### Configure Environment Variables

Create a `.env` file:

```env
IBM_API_KEY=YOUR_API_KEY
IBM_PROJECT_ID=YOUR_PROJECT_ID
IBM_URL=YOUR_IBM_ENDPOINT

OPENWEATHER_API_KEY=
GOOGLE_MAPS_API_KEY=
```

### Start Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Future Enhancements

* Live Flight Booking
* Live Hotel Booking
* Google Maps Integration
* Real-Time Weather Tracking
* WhatsApp Travel Assistant
* Voice-Based Travel Planning
* Multi-Language Support

---

## Conclusion

AI Travel Planner Agent simplifies travel planning through intelligent automation powered by IBM watsonx.ai and IBM Cloud Lite.

The platform generates personalized itineraries, travel recommendations, budget plans, and safety guidance through a scalable multi-agent architecture suitable for real-world deployment and hackathon demonstrations.
