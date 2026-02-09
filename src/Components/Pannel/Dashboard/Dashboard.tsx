import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

const Dashboard = () => {
    const { username } = useAuth();
    const [loginTime, setLoginTime] = useState<string>('');

    useEffect(() => {
        // Get login time from session storage
        const storedLoginTime = localStorage.getItem('loginTime');
        if (storedLoginTime) {
            const date = new Date(storedLoginTime);
            setLoginTime(date.toLocaleString());
        }
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <div style={{ 
                marginTop: '20px', 
                padding: '20px', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
            }}>
                <h2 style={{ marginBottom: '10px' }}>Welcome back!</h2>
                <p style={{ fontSize: '16px', marginBottom: '8px' }}>
                    <strong>Username:</strong> {username || 'Guest'}
                </p>
                {loginTime && (
                    <p style={{ fontSize: '14px', color: '#666' }}>
                        <strong>Last Login:</strong> {loginTime}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;