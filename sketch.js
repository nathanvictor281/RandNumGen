<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
  <title>Random Number Generator</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #333;
      font-family: Arial, sans-serif;
    }

    .container {
      text-align: center;
      color: #f0f0f0;
    }

    .title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .input-container {
      margin-bottom: 10px;
    }

    .input-label {
      font-size: 20px;
      margin-right: 10px;
    }

    .number-input {
      padding: 10px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      text-align: center;
    }

    .generate-button {
      padding: 10px 20px;
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
      margin-top: 20px;
    }

    .number-display {
      margin-top: 20px;
      font-size: 48px;
      font-weight: bold;
    }

    .clicks-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .clicks-label {
      font-size: 20px;
      margin-right: 10px;
    }

    .clicks-input {
      width: 50px;
      padding: 5px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      text-align: center;
    }

    .dice-button {
      padding: 5px;
      margin-left: 10px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="title">Random Number Generator</h1>
    <div class="input-container">
      <label class="input-label">Minimum:</label>
      <input type="number" id="minNumber" class="number-input" min="0" step="1" value="1">
    </div>
    <div class="input-container">
      <label class="input-label">Maximum:</label>
      <input type="number" id="maxNumber" class="number-input" min="0" step="1" value="18">
    </div>
    <div class="clicks-container">
      <label class="clicks-label">Number of Clicks:</label>
      <input type="number" id="numClicks" class="clicks-input" min="1" step="1" value="1">
      <button id="diceButton" class="dice-button">&#x2680;</button>
    </div>
    <button id="generateButton" class="generate-button">Generate Random Number</button>
    <div id="numberDisplay" class="number-display"></div>
  </div>
  <script src="sketch.js"></script>
</body>
</html>
