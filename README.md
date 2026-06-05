# AI Travel Planner Agent ✈️🌎

![IBM watsonx.ai](https://img.shields.io/badge/IBM-watsonx.ai-blue?style=for-the-badge&logo=ibm)
![IBM Cloud Lite](https://img.shields.io/badge/IBM-Cloud%_Lite-052FAD?style=for-the-badge&logo=ibm)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> "AI Travel Planner Agent is a multi-agent travel assistant powered by IBM watsonx.ai and Meta Llama 3.3 70B Instruct. The system generates personalized itineraries, budget analysis, travel recommendations, safety alerts, booking suggestions, and destination insights through an intelligent agent orchestration architecture."

## Project Overview

This project was built to deliver a highly robust, production-ready travel planning platform. It leverages a powerful **10-Agent Architecture** running on the IBM Cloud Lite tier to dynamically generate nuanced travel plans tailored to user preferences. 

## Features
- **Intelligent 10-Agent System**: Agents specialize in distinct travel domains (Budget, Safety, Weather, etc.) to ensure high-quality output.
- **Premium Glassmorphism Dashboard**: A modern, 12-card dashboard featuring skeleton loading animations and IBM-inspired teal/blue gradients.
- **Intelligent Demo Mode**: If API keys (like Google Maps or OpenWeather) are missing, the system gracefully falls back to highly realistic mock components (e.g., animated CSS Map placeholders and mock weather context) so hackathon judging is never interrupted.
- **Context-Aware Recommendations**: Weather directly influences the LLM's generated itinerary (e.g. recommending indoor activities during thunderstorms).

## Architecture Diagram

```mermaid
graph TD
    User[User UI] -->|Travel Preferences| React[React Frontend]
    React -->|API Request| FastAPI[FastAPI Backend]
    
    FastAPI --> Orch[Multi-Agent Orchestrator]
    
    Orch -->|Fetch Context| Weather[Weather Agent API/Mock]
    Weather --> Orch
    
    Orch -->|Concurrent Prompts| Llama[IBM watsonx.ai\nmeta-llama/llama-3-3-70b-instruct]
    
    subgraph Multi-Agent Architecture
        Llama --> A1[Destination Agent]
        Llama --> A2[Budget Agent]
        Llama --> A3[Itinerary Agent]
        Llama --> A4[Booking Agent]
        Llama --> A5[Travel Tips Agent]
        Llama --> A6[Alert Agent]
        Llama --> A7[Local Guide Agent]
        Llama --> A8[Schedule Optimization Agent]
    end
    
    Multi-Agent Architecture -->|Structured JSON| Orch
    Orch -->|Aggregate| FastAPI
    FastAPI -->|Display Dashboard| React
```

## IBM watsonx.ai Integration & IBM Cloud Lite Usage
This platform exclusively utilizes `meta-llama/llama-3-3-70b-instruct` via the IBM watsonx.ai SDK. To accommodate the rate limits of the **IBM Cloud Lite** tier, the backend `orchestrator.py` intelligently groups the 9 LLM logical agents into fewer physical API calls. The prompts strictly enforce structured JSON outputs to feed the React frontend dynamically.

## Setup Instructions & Local Development Steps

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/travel-planner-agent.git
cd travel-planner-agent
```

### 2. Environment Configuration
Copy the `.env.example` file and configure it:
```bash
cp .env.example .env
```
Fill in your IBM credentials:
```env
IBM_API_KEY=your_ibm_api_key_here
IBM_PROJECT_ID=your_ibm_project_id_here
IBM_URL=https://au-syd.ml.cloud.ibm.com

OPENWEATHER_API_KEY=your_key # Optional for Demo Mode
GOOGLE_MAPS_API_KEY=your_key # Optional for Demo Mode
```

### 3. Run Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 4. Run Frontend (React/Vite)
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
Navigate to `http://localhost:5173`.

## Screenshots Section
*(Add screenshots of your beautiful premium dashboard here prior to PPT submission!)*

## Future Enhancements
- Live ticket booking integration (e.g. Skyscanner, Booking.com APIs).
- Interactive drag-and-drop map routing using advanced Google Maps features.
- User accounts and collaborative itinerary saving functionality.
