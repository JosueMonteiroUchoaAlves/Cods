from fastapi import FastAPI

app = FastAPI()

# Aponta que a função logo abaixo dela será executada quando houver uma requisição
@app.get("/")
def hello_world():
    return {"Hello": "World"}
#Quando quiser somar
@app.get("/soma")
def soma(var1: int, var2: int):
    return {"Soma":var1+var2} 

@app.get("/subtracao")
def subtracao(var1:int, var2:int):
    return {"Diferença": var1-var2}

@app.get("/divisao")
def divisao(var1:int,var2:int):
    return {"Quociente":var1/var2}

@app.get("/multiplicacao")
def multiplicacao(var1:int, var2: int):
    return {"Produto":var1*var2}