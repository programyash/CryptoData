import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {

    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, SetDisplayCoin] = useState([]);
    const [ input, setInput ] = useState('');

    const inputhandler = (event) => {
        setInput(event.target.value);
        if (event.target.value === "") {
            SetDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (event) => {
        event.preventDefault();
        const coins =await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        })
        SetDisplayCoin(coins);
    }

    useEffect(() => {
        if (Array.isArray(allCoin)) {
            SetDisplayCoin(allCoin);
        } else {
            SetDisplayCoin([]); // Ensure state is always an array
        }
    }, [allCoin]);

    return (
        <div className='home'>
            <div className="hero">
                <h1>Largest
                    <br />Crypto Marketplace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace.<br /> Sign up to explore more about cryptos.</p>
                <form onChange={searchHandler}>
                    <input onChange={inputhandler} value={input} type="text" placeholder='Search Crypto..' required />
                    <button>Search</button>
                </form>
            </div>
            <div className="crypto_table">
                <div className="table_layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: 'center' }}>24h change</p>
                    <p className="marketheading"style={{ textAlign: 'right' }}>Market Cap</p>
                </div>
                {
                    Array.isArray(displayCoin) ? displayCoin.slice(0, 10).map((item, index) => (
                        <div className="table_layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {item.price_change_percentage_24h}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </div>
                    )) : <p>Loading...</p>
                }

            </div>
        </div>
    )
}

export default Home