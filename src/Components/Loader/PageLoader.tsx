import React from 'react';
import './PageLoader.css';
import logo from '../../assets/images/white-logo.png';

interface PageLoaderProps {
    isVisible: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isVisible }) => {
    return (
        <div className={`page-loader ${!isVisible ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <img src={logo} alt="C6Xchange" className="loader-logo" />
                <div className="loader-spinner">
                    <div className="spinner"></div>
                </div>
                <p className="loader-text">Loading Experience...</p>
            </div>
        </div>
    );
};

export default PageLoader;

