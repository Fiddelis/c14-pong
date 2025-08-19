# The Pong of The Ping

## Description

Is an API which receives a request and throw back a new request to complementary API ["The Ping of The Pong"](https://github.com/pedro-h-freitas/c14-ping).

## How to install

### Clone the repository

```sh
git clone https://github.com/Fiddelis/c14-pong.git
cd c14-pong
```

### Bun

You can install Bun with the command below:

macOS/Linux

```ps1
curl -fsSL https://bun.sh/install | bash
```

Windows

```ps1
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Build and Run

```ps1
# Install dependencies
bun install

# Build the project
bun build --compile --minify-whitespace --minify-syntax --target bun --outfile server ./src/index.ts

# Run executable
./server
```

## Conflict Resolution
The merge conflict was resolved via GitHub.
