from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from app.services.orchestrator import generate_travel_plan

router = APIRouter()

class TravelPlanRequest(BaseModel):
    destination: str
    budget: str
    startDate: str
    endDate: str
    travelers: int
    travelStyle: str
    interests: List[str]

@router.get("/health")
def health_check():
    return {"status": "ok"}

@router.post("/travel-plan")
async def create_travel_plan(request: TravelPlanRequest):
    try:
        plan = await generate_travel_plan(request)
        return plan
    except Exception as e:
        print(f"Error generating travel plan: {e}")
        raise HTTPException(status_code=500, detail=str(e))
