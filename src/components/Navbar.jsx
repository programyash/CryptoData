import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assests/logo.png';
import arrowicon from '../assests/arrow_icon.png';
import { CoinContext } from '../context/CoinContext';

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: '$' })
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", Symbol: '€' })
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", Symbol: '₹' })
        break;
      }
      default: {
        setCurrency({ name: "inr", Symbol: '₹' })
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrowicon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar