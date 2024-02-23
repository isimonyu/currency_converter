# Currency Converter
Microservice created for CS361. 
Offers an endpoint to convert from a USD base to other currencies.
Currency exchange rates are updated daily. 
Rates are retrieved from Exchange Rate API (https://www.exchangerate-api.com).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
1. Clone the repository: `git clone https://github.com/isimonyu/currency_converter.git`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

The app should be running on `http://localhost:8888`

## Usage 
### REQUESTING Data:
- This app offers one endpoint at `http://localhost:8888/{SYMBOL}/{AMOUNT}`
  - {SYMBOL} and {AMOUNT} are parameters used to query for the conversion.
  - Enter the three letter symbol for the desired currency in place of {SYMBOL} (e.g. CAD, EUR, GBP).
  - Replace {AMOUNT} with the specified amount to be converted (e.g. 100, 12.69, 9.99).
  - Example URL `https://localhost:8888/CAD/100`

### RECEIVING Data:
- The response to endpoint at `http://localhost:8888/{SYMBOL}/{AMOUNT}` will include the conversion under the *data* attribute. 
- If your response variable is named 'response', the conversion will be 'response.data'
- Example Reponse to URl `https://localhost:8888/CAD/100`:
  - response.data = 134.81 (Value will vary depending on the current exchange rate.)

#### Example
- This example uses Axios.js with Node to request a GET request to the app.
1. Create a new directory and run `npm init` to initialize the directory.
2. Then install Axios.js: run `npm install axios`
3. Create a new file `app.js` and open it in code editor.
4. At the top of `app.js` write
   ```javascript
   const axios = require("axios");
6. Create an async function: `convert(symbol, amount)`
   ```javascript
   async function convert(symbol, amount) {
     const response = await axios.get(`http://localhost:8888/${symbol}/${amount}`)
     return response.data
   };
7. In this function, symbol should be a string type and amount should be a float type.
8. `convert("CAD", 100)` Should return 134.81 (Value will vary depending on the current exchange rate.)

## License

MIT License

Copyright (c) 2024 Simon Yu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

