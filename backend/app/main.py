from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(title="YAVIN 1 Backend API")


@app.get("/")
async def root():
    return JSONResponse({"message": "Codudu backend running"})


@app.get("/health")
async def health():
    return JSONResponse({"status": "ok"})
