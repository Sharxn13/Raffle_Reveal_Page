import React from 'react'
import './footer.css'
import Logo from './mintLogo.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FirstBox'>
                <img src={Logo} className='CompanyLogo'/>
                <span className='CompanyName'>Mintable</span>
                <span className='JOC'>Join Our Community</span>
            </div>
            <div className='SecBox'>
                <span className='MA'>My Account</span>
                <span className='CAS'>Create a Store</span>
                <span className='LIS'>List an Item for Sale</span>
                <span className='MP'>My Profile</span>
                <span className='FBrowse'>Browse</span>
            </div>
            <div className='ThirdBox'>
                <span className='NH'>Need Help?</span>
                <span className='FAQ'>FAQ</span>
                <span className='MG'>Mintable Guide</span>
            </div>
            <div className='ForthBox'>
                <span className='BAI'>Buy an Item</span>
                <span className='DI'>Digital Items</span>
                <span className='Stores'>Stores</span>
            </div>
            <div className='FifthBox'>
                <span className='Legal'>Legal</span>
                <span className='PP'>Privacy Policy</span>
                <span className='TOU'>Terms of Use</span>
            </div>
        </div>
    )
}

export default Footer
