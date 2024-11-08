import React ,{createContext ,useEffect,useState} from 'react'

export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const [allCoin, setAllcoin] = useState([]);
    const [currency, setCurrency] = useState({ name: 'usd', symbol: '$' });
    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json' }
        };
        
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => {
                console.log("Fetched data:", res); // Check the API response here
                setAllcoin(res);
            })
            .catch(err => console.error("Error fetching data:", err));
    };
    
    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue ={
        allCoin, currency, setCurrency
    }
    
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider >
    );
}

export default CoinContextProvider
