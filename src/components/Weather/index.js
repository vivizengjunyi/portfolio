import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './index.css';

export const Weather = () => {
    const [dataWeather, setDataWeather] = useState();
    const [city, setCity] = useState(0);
    const citySelect = useRef(null);
    const cities = ['Vancouver', 'Regina', 'Oakville'];
    const postCode = ['V6M%204H1', 'J4Y%200B5', 'L6H%206W8'];

    // useEffect(() => {
    //     const fetchWeather = async () => {
    //         const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f55c7ead5bb1de16181b1b90611eea9`);
    //         setDataWeather({ data });
    //     }
    //     fetchWeather(dataWeather);
    // }, [city]);

    useEffect(() => {
        const fetchWeather = async () => {
            const { data } = await axios.get(`https://api.weathersource.com/v1/4c6153d5b0726ef40e8d/postal_codes/${postCode[city]},ca/nowcast.json?timestamp_eq=${new Date().toISOString()}`, {
                headers: {
                    'origin': 'https://api.weathersource.com/',
                  },
            });
            setDataWeather({ data });
        }
        fetchWeather(dataWeather);
    }, [city]);



    const changeCity = () => {
        const citySelected = citySelect.current.seletedIndex;
        if(citySelected >=0) setCity(citySelected);
    }

    function monthAndDay() {
        const offset = [-8, -6, -5][city]
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        let month = nd.toLocaleString("en-US", {month: "long"}); 
        let date = nd.toLocaleString("en-US", {day: "numeric"});
        return `${month} ${date}`;
    }

    function hourAndMinute() {
        const offset = [-8, -6, -5][city];
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        var date = nd.toLocaleString('en-US',{hour12:false}).split(" ");
        var time = date[1];
        return time.split(':').slice(0, 2).join(':');
    }
   

    return dataWeather ? (
        <div className='weather'>
            <select ref={citySelect} onChange={changeCity}>
                {cities.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
            <div className='city-name'>
                {dataWeather.data.name}
            </div>
            <div className='city-date'>{monthAndDay()}</div>
            <div className='city-time'>{hourAndMinute()}</div>
            <div className='weather-name'>
                {dataWeather.data.weather[0].main}
            </div>
            {/* <img src={`https://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}@2x.png`} alt={dataWeather.data.weather.main} className='weather-icon' /> */}
            <div className='weather-current'>
                {Math.round((dataWeather.data[0].tempAvg - 32) / 1.8000)}
                <sup>&deg;C</sup>
            </div>
            <div className='weather-range'>
                <p className='min'>Min {Math.round((dataWeather.data[0].tempMin - 32) / 1.8000)}
                    &deg;C</p>
                <p className='max'>Max {Math.round((dataWeather.data[0].tempMax - 32) / 1.8000)}
                    &deg;C</p>
            </div>
        </div>
    ) : null
}

export default Weather;



