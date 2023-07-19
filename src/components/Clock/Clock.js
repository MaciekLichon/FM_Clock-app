import './Clock.scss';
import ClockDetails from '../ClockDetails/ClockDetails';
import ClockHero from '../ClockHero/ClockHero';
import Quote from '../Quote/Quote';

import {useState, useEffect} from 'react';

import Ipbase from '@everapi/ipbase-js'

const Clock = () => {

    const [showDetails, setShowDetails] = useState(false);

    const [worldTimeData, setWorldTimeData] = useState({});
    const [ipBaseData, setIpBaseData] = useState({});
    const [daytime, setDaytime] = useState('');

    const formatTime = (data) => {
        const time = new Date(data);
        const hours = time.getHours() >= 10 ? time.getHours() : `0${time.getHours()}`;
        const minutes = time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`;

        const hour = time.getHours();
        if (hour >= 5 && hour < 12) {
            setDaytime('Good morning');
        } else if (hour >= 12 && hour < 18) {
            setDaytime('Good afternoon');
        } else {
            setDaytime('Good evening');
        }

        return `${hours}:${minutes}`;
    }

    useEffect(() => {

        // FIRST API
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                setWorldTimeData({
                    time: formatTime(data.datetime),
                    abbreviation: data.abbreviation,
                    timezone: data.timezone,
                    day_of_year: data.day_of_year,
                    day_of_week: data.day_of_week,
                    week_number: data.week_number,
                });
            });

        // SECOND API
        const ipBase = new Ipbase('ipb_live_HEjB398xzD0jtCbHCruiCXbKxP4ZSXsBBXJYZoaW')
        ipBase.info().then(response => {
            setIpBaseData({
                city: response.data.location.city.name,
                country: response.data.location.country.alpha2
            })
        });
    }, [])

    return (
        <div className={`clock ${daytime === 'Good evening' ? 'clock-night' : 'clock-day'}`}>
            <Quote close={showDetails}/>

            <div className="clock__data">
                <ClockHero showDetails={showDetails}
                           setShowDetails={setShowDetails}
                           time={worldTimeData.time}
                           abbreviation={worldTimeData.abbreviation}
                           city={ipBaseData.city}
                           country={ipBaseData.country}
                           daytime={daytime}/>
                <ClockDetails open={showDetails}
                              timezone={worldTimeData.timezone}
                              day_of_year={worldTimeData.day_of_year}
                              day_of_week={worldTimeData.day_of_week}
                              week_number={worldTimeData.week_number}/>
            </div>
        </div>
    );
};

export default Clock;
