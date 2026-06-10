# AI Travel Planner Agent ✈️🌍

**IBM watsonx.ai | IBM Granite Model | IBM Cloud Lite | FastAPI | React | Python | Tailwind CSS**

## Overview

AI Travel Planner Agent is an intelligent travel planning platform built using IBM Cloud Lite and IBM watsonx.ai.

The application helps travelers generate personalized travel plans, optimize budgets, discover attractions, receive travel recommendations, and create complete itineraries using AI-powered agentic orchestration.

The system analyzes:

* Destination Preferences
* Budget Constraints
* Travel Dates
* Number of Travelers
* Travel Interests

and generates a personalized travel experience within seconds.

---

## Key Features

### Personalized Travel Planning

Generate customized travel plans based on user preferences.

### Agentic AI Architecture

Specialized AI components collaborate to create high-quality travel recommendations.

### Budget Optimization

Estimate transportation, accommodation, food, and miscellaneous expenses.

### Smart Itinerary Generation

Generate detailed day-wise travel schedules.

### Weather Insights

Provide weather forecasts and travel-related recommendations.

### Travel Tips & Guidance

Provide travel recommendations, cultural insights, and safety guidance.

### Interactive Dashboard

Modern React dashboard with:

* Responsive Design
* Interactive Cards
* Travel Plan Visualization
* User-Friendly Interface

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
* IBM Granite Model

### Cloud Services

* IBM Cloud Lite

---

## Agentic AI Components

| Component           | Responsibility                                               |
| ------------------- | ------------------------------------------------------------ |
| Destination Agent   | Recommends destinations and attractions                      |
| Budget Agent        | Calculates travel expenses and budget breakdown              |
| Itinerary Agent     | Generates day-wise travel schedules                          |
| Weather Agent       | Provides weather insights and recommendations                |
| Travel Tips Agent   | Provides travel tips, cultural guidance, and recommendations |
| Travel Orchestrator | Combines outputs into a personalized travel plan             |

---

## IBM watsonx.ai Integration

IBM watsonx.ai serves as the core AI engine for:

* Travel Recommendation Generation
* Itinerary Planning
* Budget Analysis
* Travel Guidance
* Destination Discovery

The platform utilizes IBM Granite Models through IBM watsonx.ai to generate intelligent travel recommendations and personalized travel plans.

---

## Demo Mode

If external APIs are unavailable:

* Demo Weather Information
* Demo Travel Recommendations
* Demo Attractions Data
* Demo Budget Estimates

are automatically generated.

This ensures uninterrupted demonstrations during project presentations and evaluations.

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

* Live Flight Booking Integration
* Live Hotel Booking Integration
* Real-Time Weather Tracking
* Voice-Based Travel Assistant
* Multi-Language Support
* Smart Route Optimization
* Mobile Application Deployment
* Personalized Travel Recommendations Based on User History

---

## Conclusion

AI Travel Planner Agent simplifies travel planning through intelligent automation powered by IBM watsonx.ai, IBM Granite Model, and IBM Cloud Lite.

The platform generates personalized itineraries, travel recommendations, budget plans, weather insights, and travel guidance through an agentic AI architecture, enabling users to plan trips efficiently and make informed travel decisions.
