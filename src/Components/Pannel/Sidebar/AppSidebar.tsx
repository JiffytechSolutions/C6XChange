import { SideBar } from 'jiffy-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { menuData } from './MenuItem';
import logo from '../../../assets/images/black-logo.png'

const AppSidebar = () => {
    const navigate = useNavigate();
    return (
        <SideBar
            
            logo={<img src={logo} alt="logo" />}
            onChange={(e) => {navigate(e)}}
        >
            <SideBar.Item menu={menuData} />

        </SideBar>
    );
};

export default AppSidebar;