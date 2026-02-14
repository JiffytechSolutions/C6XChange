import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'jiffy-ui';
import logo from '../../assets/images/black-logo.png';
import logoWhite from '../../assets/images/white-logo.png';
import './Landing.css';

const LandingHeader = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`landing-header-dark ${isScrolled ? 'active' : ''}`}>
            <div className='landing-header-content'>
                <div className='landing-logo'>
                    <img src={logo} alt="C6Xchange Logo"  />
                    <img className='logo-white' src={logoWhite} alt="C6Xchange Logo"  />
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
                        onClick={() => navigate('/login')}
                       
                    >
                        Login
                    </Button>
                    <Button 
                        onClick={() => navigate('/login')}
                       
                    >
                        Register
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default LandingHeader;
