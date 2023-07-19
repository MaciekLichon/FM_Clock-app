import './Quote.scss';
import Container from '../Container/Container';

import iconRefresh from '../../assets/desktop/icon-refresh.svg';

import {useState, useEffect} from 'react';

const Quote = ({ close }) => {

    const [quote, setQuote] = useState({});
    const getQuote = () => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote({
                    author: data.author,
                    text: data.content
                });
            });
    };

    useEffect(() => {
        getQuote();
    }, [])

    return (
        <div className={`quote ${close ? 'quote-hidden' : ''}`}>
            <Container>
                <div className="quote__content">
                    <div className="quote__text">
                        <p className="quote__msg">
                            "{quote.text}"
                        </p>
                        <p className="quote__author">
                            {quote.author}
                        </p>
                    </div>
                    {quote.text && <button className="quote__btn" onClick={getQuote}>
                        <img src={iconRefresh} alt="icon refresh"/>
                    </button>}
                </div>
            </Container>
        </div>
    );
};

export default Quote;
