from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

#Indicates that the function right below it will be executed when there is a request
@app.get("/")
def hello_world():
    return {"Hello": "World"}

#When you want to...
@app.get("/sum/{var1}/{var2}")
def sum(var1: int, var2: int):
    return {"Sum": var1 + var2}

@app.get("/subtraction/{var1}/{var2}")
def subtraction(var1: int, var2: int):
    return {"Difference": var1 - var2}

@app.get("/division/{var1}/{var2}")
def division(var1: int, var2: int):
    return {"Quotient": var1 / var2}

@app.get("/multiplication/{var1}/{var2}")
def multiplication(var1: int, var2: int):
    return {"Product": var1 * var2}

