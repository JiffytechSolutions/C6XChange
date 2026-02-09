import React from 'react';
import { AppWrapper } from 'jiffy-ui';
import AppSidebar from './Sidebar/AppSidebar';
import AppTopbar from './Topbar/AppTopbar';
import Footer from './Footer/Footer';
import Router from './Dashboard/Router';


const Panel = () => {
    return (
        <AppWrapper 
        sideBar={<AppSidebar />} 
        topBar={<AppTopbar />} 
        footer={<Footer />} 
        content={<Router />}
        />
    );
};

export default Panel;