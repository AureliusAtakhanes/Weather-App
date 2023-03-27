export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1ad164b504843fa402d95462b500cf1&lang=ru&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}