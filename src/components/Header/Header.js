import React from 'react'
import './header.css'
import mint from './mintLogo.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Logo'>
                <img src={mint} className='Mintable'/>
            </div>
            <div className='SearchBar'>
                <span className='Text'>Search for anything      <button>Search</button></span>
            </div>
            <div className='Tabs'>
                <span className='Browse'>Browse</span>
                <span className='Discover'>Discover</span>
                <span className='MAI'>Mint an Item</span>
                <span className='Vote'>Vote/DAO</span>
                <span className='MA'>My Account</span>
                <span className='Crypto'>Ethereum</span>
            </div>
        </div>
    )
}

export default Header;
