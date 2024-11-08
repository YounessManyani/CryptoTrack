import React, { useContext, useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import './Home.css'

function Home() {
  const {allCoin,currency}=useContext(CoinContext)
  const [displayCoin, setDisplayCoin]=useState([])
  const [input, setInput] = useState("")

  const inputHandler =(event)=>{
    setInput(event.target.value);
    if(event.target.value === "" ){
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (event)=>{
    event.preventDefault()
    const coins =  await allCoin.filter((item)=>{
    return  item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }


  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  
  return (
    <div className='home' >
      <div className='hero'>
      <h1>Largest <br/> Crypto Marketpalce</h1>
      <p>welcome to the world largest crypto marketplace in the world </p>
      <form onSubmit={searchHandler}  action="">
        <input onChange={inputHandler} value={input} type="text" placeholder='Search crypto ...' required />
        <button type='submit'> Search</button>
      </form>
      </div>
      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change </p>
          <p className='marketcap'>Market Cap </p>
        </div>
        {
         displayCoin && displayCoin.slice(0,10).map((item,index)=>(
            <Link to={`/coin/${item.id}`} style={{color: '#ffffff'}} className='table-layout' key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name + ' - ' + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h>0 ? "green" : "red"}>
                  {Math.floor(item.price_change_percentage_24h*100)/100}
                </p>
                <p className='marketcap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link >
          ))
        }
      </div>
    </div>
  )
}

export default Home