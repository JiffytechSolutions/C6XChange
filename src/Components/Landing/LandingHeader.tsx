import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'jiffy-ui';
import logo from '../../assets/images/black-logo.png';
import './Landing.css';

const LandingHeader = () => {
    const navigate = useNavigate();

    return (
        <header className='landing-header-dark'>
            <div className='landing-header-content'>
                <div className='landing-logo'>
                    <img src={logo} alt="C6Xchange Logo" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                
                <nav className='landing-nav-dark'>
                    <a href='#home' className='nav-link-dark'>Home</a>
                    <a href='#features' className='nav-link-dark'>Features</a>
                    <a href='#about' className='nav-link-dark'>About</a>
                    <a href='#pricing' className='nav-link-dark'>Pricing</a>
                    <a href='#contact' className='nav-link-dark'>Contact</a>
                </nav>

                <div className='landing-header-actions'>
                    <Button 
                        variant='Secondary' 
                        onClick={() => navigate('/C6XChange/login')}
                       
                    >
                        Login
                    </Button>
                    <Button 
                        onClick={() => navigate('/C6XChange/login')}
                       
                    >
                        Register
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default LandingHeader;
