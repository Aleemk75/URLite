URLite - A URL Shortener Microservice


Shorten those long, unwieldy links with a single API call!

This is a high-performance microservice built with Node.js, MongoDB, and Redis that generates unique short codes for long URLs and serves redirects quickly using an in-memory cache.


🚀 Features

URL Shortening: Converts long URLs into short, easy-to-share links.

Rapid Redirection: Efficiently redirects users from the short link back to the original long URL.

Caching with Redis: Uses Redis as an in-memory data store for lightning-fast lookups of frequently accessed URLs.

Persistence: Uses MongoDB (via Mongoose) to store and retrieve all URL mappings permanently.

Robust & Modular: Built with a clear structure using Node.js and Express.

🛠️ Tech Stack

Technology	Purpose

Node.js	JavaScript Runtime Environment
Express.js	Web Framework for handling routing and middleware
MongoDB	Primary Database for storing URL mappings
Mongoose	Object Data Modeling (ODM) library for MongoDB
Redis	Caching layer for high-speed lookups and session management

Export to Sheets

⚙️ Installation and Setup

Prerequisites
You need the following installed on your machine:

Node.js (version 16 or higher)

MongoDB (running locally or a remote Atlas instance)

Redis Server (running locally on port 6379, or configured as specified in your code)

Steps

Clone the Repository

Bash

git clone <your_repo_url>
cd URL_SHORT
Install Dependencies

Bash

npm install
Configure Environment Variables

Create a .env file in the root directory and add the following variables.

Bash

# SERVER SETTINGS
PORT=8001
BASE_URL=http://localhost:8001 # The domain of your shortener

# MONGODB CONNECTION
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/URlshortner"

# REDIS CONNECTION
REDIS_PORT=6379
REDIS_HOST=127.0.0.1
Start MongoDB and Redis Servers

Ensure your local MongoDB (mongod) and Redis servers are running successfully in separate terminals.

Run the Application

Bash

node index.js
You should see output confirming all connections:

Server is running on Port 8001
Redis Client Connected
Mongoose connected successfully!
💡 Usage (API Endpoints)
1. Shorten a URL
Endpoint: POST /api/url

Creates a new short URL and returns the generated short code.

Parameter	Type	Required	Description
longUrl	string	Yes	The original long URL to be shortened.

Export to Sheets
Example Request:

Bash

curl -X POST \
  http://localhost:8001/api/url \
  -H 'Content-Type: application/json' \
  -d '{"longUrl": "https://www.google.com/search?q=url+shortener+best+practices"}'
Example Success Response (Status: 201 Created):

JSON

{
    "shortUrl": "http://localhost:8001/aBcD1f",
    "shortCode": "aBcD1f",
    "originalUrl": "https://www.google.com/search?q=url+shortener+best+practices"
}
2. Redirect to Original URL (Cached Lookup)
Endpoint: GET /:shortCode

This is the primary consumer endpoint. It first checks Redis, and if a hit is found, it immediately redirects the user, bypassing the slower database query.

Example Request (Browser or cURL):

Bash

curl -L http://localhost:8001/aBcD1f
Response (Status: 302 Found):

The server responds with an HTTP 302 Found status, redirecting the client to the originalUrl.

⚡ Caching Strategy
The application uses a read-through cache pattern to ensure redirects are handled with minimal latency:

Incoming Redirect Request: The server receives a request for a short code (/aBcD1f).

Redis Check: The application first queries Redis using the short code as the key.

Cache Hit: If the URL is found in Redis, the server immediately redirects the user. This is the fastest path.

Cache Miss: If the URL is not found in Redis, the server proceeds to Step 3.

MongoDB Query: The application queries the MongoDB database for the short code mapping.

Cache Update: If the mapping is found in MongoDB, the original URL is saved to Redis before the redirect is performed. This ensures the next request for the same short code is a fast cache hit.

Redirect: The user is redirected to the original URL.

✍️ Author

Aleem Khan

[[GitHub Profile Link - (https://github.com/Aleemk75)]

[LinkedIn Profile Link - (https://www.linkedin.com/in/aleemkh4n/)]


