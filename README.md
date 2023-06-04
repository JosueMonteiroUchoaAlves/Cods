# Counter

This repository was created with the intention of learning the basics of reactJS, docker and docker compose, and API's.

Note: The Backend and Frontend have no relation in this project, for now.
## Development stack

**Front-end:** React

**Back-end:** Python


## Running locally

Clone the project

```bash
  git clone https://github.com/JosueMonteiroUchoaAlves/Cods
```

Open your editor, enter the main folder, open a new terminal

Run the DockerCompose
```bash
  docker compose up
```



## Using the API (with curl)

Hello World:
```bash
  curl localhost:8000
```

To sum:
```bash
  curl -i localhost:8000/sum?var1=1^&var2=2
```
subtract:
```bash
  curl -i localhost:8000/subtraction?var1=5^&var2=3
```
multiply:
```bash
  curl -i localhost:8000/multiplication?var1=7^&var2=4
```
divide:
```bash
  curl -i localhost:8000/division?var1=8^&var2=2
```

