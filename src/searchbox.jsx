import React, { useState } from "react";
import TextField from "@mui/material/TextField"; // Material-UI TextField
import Button from "@mui/material/Button"; // Material-UI Button
import "./searchbox.css"; // Custom CSS

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState(""); // City name input state
    const [error, setError] = useState(""); // Error message state

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3c3fa5472731244e21c6508bdc3bf3d9";

    /**
     * Fetch weather information from the API
     */
    const getWeatherInfo = async () => {
        try {
            setError(""); // Clear previous errors
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("Such a place does not exist. Please try again.");
                } else {
                    throw new Error(`API Error: ${response.status}`);
                }
            }

            const jsonResponse = await response.json();

            return {
                city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (error) {
            setError(error.message); // Set the error message
            return null;
        }
    };

    /**
     * Handle input field changes
     */
    const handleChange = (evt) => {
        setCity(evt.target.value); // Update city state
    };

    /**
     * Handle form submission
     */
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const newinfo = await getWeatherInfo();
        if (newinfo) {
            updateInfo(newinfo); // Update parent with fetched data
        }
        setCity(""); // Clear input field
    };

    /**
     * Render the component
     */
    return (
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>

            {/* Display error message if it exists */}
            {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
        </div>
    );
}