import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'jiffy-ui';
import LandingHeader from './LandingHeader';
import './Landing.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className='landing-container-dark'>
            <LandingHeader />
            
            {/* Hero Section */}
            <section className='hero-section'>
                <div className='hero-content'>
                    <h1 className='hero-title'>
                        Your Global Platform for<br />
                        <span className='gradient-text'>Secure Exchange</span>
                    </h1>
                    <p className='hero-subtitle'>
                        Trade, exchange, and manage your assets with confidence. 
                        Experience next-generation security and lightning-fast transactions.
                    </p>
                    <div className='hero-actions'>
                        <Button 
                            size='Large' 
                            onClick={() => navigate('/C6XChange/login')}
                            
                        >
                            Get Started
                        </Button>
                        <Button 
                            variant='Secondary' 
                            size='Large'
                            onClick={() => {
                                document.querySelector('#features')?.scrollIntoView({ 
                                    behavior: 'smooth' 
                                });
                            }}
                            
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Cards */}
            <section className='stats-section'>
                <div className='stats-container'>
                    <div className='stat-card'>
                        <div className='stat-icon'>📈</div>
                        <div className='stat-content'>
                            <h3>Trading Volume</h3>
                            <p className='stat-value'>$2.4B+</p>
                            <span className='stat-change positive'>+12.5%</span>
                        </div>
                    </div>
                    <div className='stat-card'>
                        <div className='stat-icon'>👥</div>
                        <div className='stat-content'>
                            <h3>Active Users</h3>
                            <p className='stat-value'>150K+</p>
                            <span className='stat-change positive'>+8.3%</span>
                        </div>
                    </div>
                    <div className='stat-card'>
                        <div className='stat-icon'>⚡</div>
                        <div className='stat-content'>
                            <h3>Avg Speed</h3>
                            <p className='stat-value'>2.4s</p>
                            <span className='stat-change positive'>-15%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Trust Us Section */}
            <section id='features' className='trust-section'>
                <div className='section-header'>
                    <h2 className='section-title'>Why Trust C6Xchange?</h2>
                    <p className='section-subtitle'>
                        Experience comes from years of excellence. Join thousands of satisfied users.
                    </p>
                </div>
                <div className='trust-grid'>
                    <div className='trust-card'>
                        <div className='trust-icon'>🔒</div>
                        <h3>Bank-Level Security</h3>
                        <p>
                            Military-grade encryption and multi-layer authentication to keep 
                            your assets safe and secure at all times.
                        </p>
                    </div>
                    <div className='trust-card'>
                        <div className='trust-icon'>💰</div>
                        <h3>Competitive Pricing</h3>
                        <p>
                            Transparent fee structure with the lowest rates in the industry. 
                            No hidden charges, ever.
                        </p>
                    </div>
                    <div className='trust-card'>
                        <div className='trust-icon'>⚡</div>
                        <h3>Instant Transactions</h3>
                        <p>
                            Lightning-fast processing with real-time confirmations. 
                            Your time is valuable, we respect that.
                        </p>
                    </div>
                    <div className='trust-card'>
                        <div className='trust-icon'>🎯</div>
                        <h3>24/7 Support</h3>
                        <p>
                            Round-the-clock customer support from our expert team. 
                            We're here whenever you need us.
                        </p>
                    </div>
                    <div className='trust-card'>
                        <div className='trust-icon'>📱</div>
                        <h3>Easy to Use</h3>
                        <p>
                            Intuitive interface designed for both beginners and professionals. 
                            Start trading in minutes.
                        </p>
                    </div>
                    <div className='trust-card'>
                        <div className='trust-icon'>🌍</div>
                        <h3>Global Reach</h3>
                        <p>
                            Available in 150+ countries with support for multiple currencies 
                            and payment methods.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='cta-section'>
                <div className='cta-content'>
                    <h2>Ready to Get Started?</h2>
                    <p>Join thousands of users who trust C6Xchange for their exchange needs</p>
                    <Button 
                        size='Large'
                        onClick={() => navigate('/C6XChange/login')}
                       
                    >
                        Create Free Account
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className='landing-footer-dark'>
                <div className='footer-content'>
                    <div className='footer-section'>
                        <h3>C6Xchange</h3>
                        <p>Your trusted platform for secure and fast exchanges. 
                        Experience the future of digital trading.</p>
                    </div>
                    <div className='footer-section'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#features'>Features</a></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href='#pricing'>Pricing</a></li>
                            <li><a href='#support'>Support</a></li>
                            <li><a href='#faq'>FAQ</a></li>
                            <li><a href='#docs'>Documentation</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href='#terms'>Terms of Service</a></li>
                            <li><a href='#privacy'>Privacy Policy</a></li>
                            <li><a href='#compliance'>Compliance</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; 2026 C6Xchange. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
