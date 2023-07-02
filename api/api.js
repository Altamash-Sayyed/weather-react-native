
    const API_KEY = '803506608d124837b3482508230207 ';

export const getWeatherForecast = async (location,days) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}`
      );
      const data = await response.json();
      // console.log(data)
      return data.forecast.forecastday;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

