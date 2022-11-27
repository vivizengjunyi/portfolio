import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './index.css';

export const Weather = () => {
    const [dataWeather, setDataWeather] = useState();
    const [city, setCity] = useState('Vancouver');
    const citySelect = useRef(null);
    const cities = ['Vancouver', 'Regina', 'Guangzhou'];
    const [_monthAndDay, setMonthAndDay] = useState("");
    const [_hourAndMinute, setHourAndMinute] = useState("");

    useEffect(() => {
        const fetchWeather = async () => {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f55c7ead5bb1de16181b1b90611eea9`);
            setDataWeather({ data });
        }
        fetchWeather(dataWeather);
    }, [city]);

    const changeCity = () => {
        const citySelected = citySelect.current.value;
        setCity(citySelected);
    }

    function monthAndDay() {
        const offset = {
            'Vancouver': -8, 'Regina': -6, 'Guangzhou': 8
        }[city]
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        let month = nd.toLocaleString("en-US", {month: "long"}); 
        let date = nd.toLocaleString("en-US", {day: "numeric"});
        setMonthAndDay(month + " " + date);
    }

    function hourAndMinute() {
        const offset = {
            'Vancouver': -8, 'Regina': -6, 'Guangzhou': 8
        }[city]
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        var date = nd.toLocaleString('en-US',{hour12:false}).split(" ");
        var time = date[1];
        setHourAndMinute(time.split(':').slice(0, 2).join(':'));
    }

    useEffect(() => {
        const interval = () => {
            monthAndDay();
            hourAndMinute();
        };
        const i = setInterval(interval,1000)
        return () => clearInterval(i);
    }, [dataWeather]);
   

    return dataWeather ? (
        <div className='weather'>
            <select ref={citySelect} onChange={changeCity}>
                {cities.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
            <div className='city-name'>
                {dataWeather.data.name}
            </div>
            <div className='city-date'>{_monthAndDay}</div>
            <div className='city-time'>{_hourAndMinute}</div>
            <div className='weather-name'>
                {dataWeather.data.weather[0].main}
            </div>
            <img src={`https://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}@2x.png`} alt={dataWeather.data.weather.main} className='weather-icon' />
            <div className='weather-current'>
                {Math.round(dataWeather.data.main.temp - 273.15)}
                <sup>&deg;C</sup>
            </div>
            <div className='weather-range'>
                <p className='min'>Min {Math.round(dataWeather.data.main.temp_min - 273.15)}
                    &deg;C</p>
                <p className='max'>Max {Math.round(dataWeather.data.main.temp_max - 273.15)}
                    &deg;C</p>
            </div>
        </div>
    ) : null
}

export default Weather;



