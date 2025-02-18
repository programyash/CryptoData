import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
const [currency, setCurrency] = useState({
    name: 'usd',
    Symbol: "$"
})

const fetchAllCoin = async => {
    const options = { method: 'GET', headers: { accept: 'application/json', 'X-cg-demo-api-key': 'CG-S5dJdftdauvss8jyQyiK6ULs' } };

    fetch(`
https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
}

useEffect(()=>{
    fetchAllCoin();
},[currency])
const ContextValue = {
    allCoin,currency, setCurrency
}

return (
    <CoinContext.Provider value={ContextValue}>
        {props.children}
    </CoinContext.Provider>
)
}

export default CoinContextProvider