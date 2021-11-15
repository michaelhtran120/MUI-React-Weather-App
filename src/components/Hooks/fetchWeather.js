export const fetchWeatherData = async (apiBase, query, key) => {
    const response = await fetch(`${apiBase}weather?q=${query}&units=imperial&APPID=${key}`);
    const data = await response.json();

    return data;
};
