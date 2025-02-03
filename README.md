# Number Classification API

This API takes a number as input and returns various mathematical properties about it, along with an interesting fun fact.

## Features

- Determines if a number is prime
- Determines if a number is perfect
- Identifies Armstrong numbers
- Calculates digit sum
- Provides number parity (odd/even)
- Fetches interesting math facts about the number

## API Endpoint

`GET /api/classify-number?number=<number>`

### Request Parameters

| Parameter | Type    | Description           |
|-----------|---------|----------------------|
| number    | integer | The number to analyze |

### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "a fun fact about the number"
}

```

### Error Response (400 Bad Request)
```json
{
    "number": "alphabet",
    "error": true
}
```

### Local Development
1. Clone the repository:
```bash
git clone https://github.com/cod-emminex/number-classification-api.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

### Live Demo
The API is deployed at: https://hng-be-stage-1.vercel.app/api/classify-number

Example:
```bash
curl "https://hng-be-stage-1.vercel.app/api/classify-number?number=371"
```

### Technologies Used
- Node.js
- Express
- CORS
- Axios

### Important Notes
The API accepts all valid integers as input

Response time is optimized to be under 500ms

CORS is enabled for cross-origin requests

Fun facts are fetched from the Numbers API

### Error Handling
Invalid inputs return a 400 Bad Request status

Server errors return a 500 Internal Server Error status

All responses are in JSON format

### License
MIT

### Author
Github: [@cod-emminex](https://github.com/cod-emminex)

For more information on hiring Node.js developers, visit [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)

```

