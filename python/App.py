from fastapi import FastAPI

app = FastAPI()

#Indicates that the function right below it will be executed when there is a request
@app.get("/")
def hello_world():
    return {"Hello": "World"}

#When you want to...
@app.get("/sum")
def sum(var1: int, var2: int):
    return {"Sum": var1 + var2}

@app.get("/subtraction")
def subtraction(var1: int, var2: int):
    return {"Difference": var1 - var2}

@app.get("/division")
def division(var1: int, var2: int):
    return {"Quotient": var1 / var2}

@app.get("/multiplication")
def multiplication(var1: int, var2: int):
    return {"Product": var1 * var2}