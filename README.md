# Weather Application 🌦️

This Weather App is a simple web application that allows users to check the current weather conditions for a specific location. Users can either enter a city name manually or allow the app to detect their location automatically using geolocation.

## Features 💡

- **Current Weather Display:** The app displays the current weather condition, temperature, and location.
- **Search Functionality:** Users can search for the weather condition of any city by entering its name in the search bar.
- **Geolocation Support:** The app can automatically detect the user's location using geolocation and display the weather condition accordingly.

# Installation 📥

## Local Setup

To run the Weather App locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Yasinj05/weather-app.git
```

2. Navigate to the project directory:

```
cd weather-app
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
PORT=your-port
BASE_URL=https://api.openweathermap.org/data/2.5/weather?units=metric&appid=
SECRET_KEY=<your-openweathermap-api-key>
```

Replace `<your-openweathermap-api-key>` with your OpenWeatherMap API key.

5. Start the server:

```
npm start
```

6. Access the Weather App:

Open your web browser and navigate to `http://localhost:3000`.

## Docker Setup

1. Clone the repository:

```
git clone https://github.com/yourusername/weather-app.git
```

2. Navigate to the project directory:

```
cd weather-app
```

3. Create a `.env` file in the root directory and add your environment variables:

```
PORT=3000
BASE_URL=https://api.openweathermap.org/data/2.5/weather?units=metric&appid=
SECRET_KEY=<your-openweathermap-api-key>
```

Replace `<your-openweathermap-api-key>` with your OpenWeatherMap API key.

4. Build the Docker image:

```
docker build -t weather-app .
```

5. Run the Docker container:

```
docker run -d -p 3000:3000 --env-file .env weather-app
```

6. Access the Weather App:

Open your web browser and navigate to `http://localhost:your-port`.

## Usage

- Enter the name of a city in the search bar and click the "Search" button to view its current weather condition.
- Allow the app to access your location to automatically detect and display the weather condition of your current location.

## Technologies Used

- Node.js
- Express.js
- Handlebars (HBS)
- HTML
- CSS
- JavaScript

## Credits

- This Weather App was created by Yasin.
- Weather data is provided by [OpenWeatherMap](https://openweathermap.org/).

## License

This project is licensed under the [MIT License](LICENSE).
