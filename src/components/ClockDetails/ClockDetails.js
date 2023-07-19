import './ClockDetails.scss';
import Container from "../Container/Container";

const ClockDetails = ({ open, timezone, day_of_week, day_of_year, week_number }) => {
    return (
        <div className={`clock__details ${open ? 'clock__details-visible' : ''}`}>
            <div>
                <Container>
                    <div className="clock__details-content">
                        <div className="clock__details-elem">
                            <p className="clock__details-elemName">current timezone</p>
                            <p className="clock__details-elemValue">{timezone}</p>
                        </div>
                        <div className="clock__details-elem">
                            <p className="clock__details-elemName">day of the year</p>
                            <p className="clock__details-elemValue">{day_of_year}</p>
                        </div>
                        <div className="clock__details-elem">
                            <p className="clock__details-elemName">day of the week</p>
                            <p className="clock__details-elemValue">{day_of_week}</p>
                        </div>
                        <div className="clock__details-elem">
                            <p className="clock__details-elemName">week number</p>
                            <p className="clock__details-elemValue">{week_number}</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ClockDetails;
