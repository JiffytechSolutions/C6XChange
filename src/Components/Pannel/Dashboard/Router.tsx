import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreditLimit from '../CreditLimit/CreditLimit';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/credit-limit" element={<CreditLimit />} />
        </Routes>
    );
};

export default Router;