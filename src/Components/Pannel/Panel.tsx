import React, { useState, useEffect } from 'react';
import { AppWrapper } from 'jiffy-ui';
import AppSidebar from './Sidebar/AppSidebar';
import AppTopbar from './Topbar/AppTopbar';
import Footer from './Footer/Footer';
import Router from './Dashboard/Router';
import PageLoader from '../Loader/PageLoader';


const Panel = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Hide loader after 4 seconds
        const loaderTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        // Show content with fade-in after loader starts fading
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 4300); // Slight delay after loader starts fading

        return () => {
            clearTimeout(loaderTimer);
            clearTimeout(contentTimer);
        };
    }, []);

    return (
        <>
            <PageLoader isVisible={isLoading} />
            <div className={`panel-wrapper ${showContent ? 'fade-in' : ''}`}>
                <AppWrapper 
                    sideBar={<AppSidebar />} 
                    topBar={<AppTopbar />} 
                    footer={<Footer />} 
                    content={<Router />}
                />
            </div>
        </>
    );
};

export default Panel;