export default async function fetchWeatherData(apiBase, query, key) {
    const response = await fetch(`${apiBase}weather?q=${query}&units=imperial&APPID=${key}`);
    const data = await response.json();

    return data;
}
