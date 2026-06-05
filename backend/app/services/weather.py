import os
import requests
import random

def get_weather_data(destination: str) -> dict:
    api_key = os.getenv("OPENWEATHER_API_KEY")
    
    # Mock data generation if key is missing
    if not api_key or api_key == "your_openweather_api_key_here":
        mock_conditions = ["Sunny", "Partly Cloudy", "Raining", "Thunderstorms", "Clear"]
        condition = random.choice(mock_conditions)
        temp = random.randint(15, 35)
        
        rec = "Perfect weather for outdoor sightseeing and exploring local markets!"
        if condition in ["Raining", "Thunderstorms"]:
            rec = "Consider packing an umbrella and prioritizing indoor museums or cafes today."
            
        return {
            "mode": "Demo Mode - Weather API Not Configured",
            "temperature": f"{temp}°C",
            "condition": condition,
            "humidity": f"{random.randint(40, 90)}%",
            "wind_speed": f"{random.randint(5, 25)} km/h",
            "rain_probability": "80%" if condition in ["Raining", "Thunderstorms"] else "10%",
            "travel_recommendation": rec
        }
        
    try:
        url = f"http://api.openweathermap.org/data/2.5/weather?q={destination}&appid={api_key}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            cond = data['weather'][0]['description'].title()
            rec = "Great conditions for exploring outdoors."
            if "Rain" in cond or "Storm" in cond:
                rec = "Rain expected. Plan some indoor activities."
                
            return {
                "mode": "Live Data",
                "temperature": f"{data['main']['temp']}°C",
                "condition": cond,
                "humidity": f"{data['main']['humidity']}%",
                "wind_speed": f"{data['wind']['speed']} m/s",
                "rain_probability": "See local forecast",
                "travel_recommendation": rec
            }
        else:
            raise Exception("API Error")
    except Exception:
        return {
            "mode": "Fallback Mode (API Error)",
            "temperature": "22°C",
            "condition": "Unknown",
            "humidity": "50%",
            "wind_speed": "10 km/h",
            "rain_probability": "10%",
            "travel_recommendation": "Weather data unavailable, be prepared for anything."
        }
