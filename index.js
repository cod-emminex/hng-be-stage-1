// index.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Helper functions for number properties
const isArmstrong = (num) => {
  const digits = String(num).split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === num;
};

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

const getDigitSum = (num) => {
  return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

const getProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push('armstrong');
  properties.push(num % 2 === 0 ? 'even' : 'odd');
  return properties;
};

// Main API endpoint
app.get('/api/classify-number', async (req, res) => {
  try {
    const numberParam = req.query.number;

    // Input validation
    if (!numberParam || isNaN(numberParam)) {
      return res.status(400).json({
        number: numberParam,
        error: true
      });
    }

    const number = parseInt(numberParam);

    // Get fun fact from Numbers API
    const funFactResponse = await axios.get(`http://numbersapi.com/${number}/math`);

    // Prepare response
    const response = {
      number: number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(number),
      digit_sum: getDigitSum(number),
      fun_fact: funFactResponse.data
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
