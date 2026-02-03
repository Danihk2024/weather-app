# Weather App

A simple React weather application that shows current weather for any city. Type a city name, press Enter, and see the temperature and conditions with a background that changes based on whether it's warm or cold.

## How It Works

### User flow

1. **Search** — Type a city name in the search bar (e.g. "London", "Tokyo", "New York").
2. **Fetch** — Press **Enter** to request the current weather from the OpenWeatherMap API.
3. **Display** — The app shows:
   - City and country
   - Today’s date
   - Current temperature in °C
   - Weather condition (e.g. Clear, Clouds, Rain)

### Background behavior

- **Cold (≤16°C)** — Blue/grey gradient background.
- **Warm (>16°C)** — Orange/red gradient background.

### Error handling

- **City not found** — Message: "City not found. Try another name."
- **Network error** — Message: "Failed to fetch weather. Check your connection."

### Technical overview

- **API:** [OpenWeatherMap](https://openweathermap.org/) Current Weather API (`/data/2.5/weather`).
- **Data:** Request uses `units=metric` (Celsius) and returns temperature, condition, location, etc.
- **State:** React `useState` for:
  - Search input (`query`)
  - API response (`weather`)
  - Error message (`error`)
- **Trigger:** Search runs only when the user presses **Enter** (`onKeyPress`), not on every keystroke.

## Getting Started

### Prerequisites

- Node.js (and npm) installed.

### Install and run

```bash
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Output is in the `build` folder, ready to deploy.

## Project structure

```
weather-app/
├── public/
│   └── index.html          # HTML shell
├── src/
│   ├── App.jsx             # Main weather component and API logic
│   ├── App.css             # Styles and background gradients
│   └── index.js            # React entry point
├── package.json
└── README.md
```

## API key

The app uses the OpenWeatherMap API. The key is set in `src/App.jsx`. For a public repo, consider using environment variables (e.g. `REACT_APP_OPENWEATHER_KEY`) and adding `.env` to `.gitignore`.

## Tech stack

- React 18
- Create React App (react-scripts)
- OpenWeatherMap API
