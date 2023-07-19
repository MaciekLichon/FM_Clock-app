import './ClockHero.scss';
import Container from '../Container/Container';

import sunIcon from '../../assets/desktop/icon-sun.svg';
import moonIcon from '../../assets/desktop/icon-moon.svg';
import arrowIcon from '../../assets/desktop/icon-arrow-down.svg';

import {useState, useEffect} from 'react';

const ClockHero = ({showDetails, setShowDetails, time, abbreviation, city, country, daytime}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    console.log(windowWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    return (
        <div className="clock__main">
            <Container>
                <div className="clock__overview">
                    <div className="clock__overview-daytime">
                        {daytime === 'Good evening' ? <img src={moonIcon} alt="moon icon"/> : <img src={sunIcon} alt="sun icon"/>}
                        <p>{daytime}, {windowWidth >= 768 && 'it\'s currently'}</p>
                    </div>
                    <p className="clock__overview-hour">
                        <span>{time}</span> {abbreviation}
                    </p>
                    <p className="clock__overview-location">
                        in {city}, {country}
                    </p>
                </div>
                <button className="clock__btn" onClick={() => setShowDetails(!showDetails)}>
                    <p className="clock__btn-text">{showDetails ? 'less' : 'more'}</p>
                    <div className={`clock__btn-icon ${showDetails ? 'clock__btn-icon-open' : ''}`}>
                        <img src={arrowIcon} alt="arrow icon"/>
                    </div>
                </button>
            </Container>
        </div>
    );
};

export default ClockHero;
