import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { DummySummaryCards } from './components/SummaryCard';
import { Card, FlexLayout, FlexLayoutItem, PageTitle } from 'jiffy-ui';
import ChartSummary from './components/ChartSummary';
import GreenScore from './components/GreenScore';

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
        
           <div>
            <PageTitle title="Dashboard" subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
            <DummySummaryCards />
            <FlexLayout>
                <FlexLayoutItem cols={{ sm: '12', md: '12', lg: '8', xl: '8'}}>
                    <Card>
                        <ChartSummary />
                    </Card>
                </FlexLayoutItem>
                <FlexLayoutItem cols={{ sm: '12', md: '12', lg: '4', xl: '4'}}>
                    <GreenScore />
                </FlexLayoutItem>
            </FlexLayout>
           
            
        </div>
    );
};

export default Dashboard;