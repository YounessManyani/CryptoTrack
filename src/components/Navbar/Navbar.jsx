import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CoinContext} from '../../context/CoinContext'
import "./Navbar.css"

function Navbar() {
  
  const {setCurrency} = useContext(CoinContext)
  const currencyHandler= (event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"€"});
        break;
      }
      case "mad":{
        setCurrency({name:"mad",symbol:"MAD"});
        break;
      }
      default:{
        setCurrency({name:"usd",symbol:"$"});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to={'/'} >
        <img src="" alt="" />
      </Link>
        <ul>
        <Link to={'/'} style={{color: 'black'}}> <li>Home</li></Link>
            <li>Feauter</li>
            <li>Price</li>
            <li>Next</li>
        </ul>
        <div className='nav-right'>
            <select name="" onChange={currencyHandler}  id="">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="mad">MAD</option>
            </select>
            <button>Sign Up</button>
        </div>
      
    </div>
  )
}

export default Navbar
