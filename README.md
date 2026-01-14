# assignment-1

A simple Node.js Express server application.

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Server

Start the server:
```bash
npm start
```

The server will run on port 3000 by default (or the port specified in the `PORT` environment variable).

## Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## Example Usage

```bash
# Test the root endpoint
curl http://localhost:3000/

# Test the health check
curl http://localhost:3000/health
```