import { 
    Card, 
    InlineStack, 
    PageTitle, 

    TextStyle, 
    Thumbnail, 
    VerticalStack,
    TextField,
    Button,
    Select
} from 'jiffy-ui'
import React, { useState } from 'react'
import user from '../../../assets/images/userProfile.png'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import './Configuration.css';
import Tabs, { TabsContent, TabsList, TabsTrigger } from '../../Tabs/Tabs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const Configuration = () => {
   

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
            {
                data: [10, 25, 18, 28, 22, 35, 20, 30, 15, 24],
                borderColor: "#cfd8ff",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                display: false,
                grid: { display: false },
            },
            y: {
                display: false,
                grid: { display: false },
            },
        },
    };

    // const handleBasicDetailsChange = (field: string, value: string) => {
    //     setBasicDetails(prev => ({ ...prev, [field]: value }));
    // };

    // const handlePasswordChange = (field: string, value: string) => {
    //     setPasswords(prev => ({ ...prev, [field]: value }));
    // };

    // const handleBankDetailsChange = (field: string, value: string) => {
    //     setBankDetails(prev => ({ ...prev, [field]: value }));
    // };

    return (
        <div className='box-container'>
            <PageTitle 
                title='Configuration' 
                subtitle="Manage your account settings and preferences" 
            />
            <VerticalStack gap={5}>
            {/* Profile Header Card */}
            <Card>
                <InlineStack gap={3} justifyContent={'between'}>
                    <InlineStack gap={3}>
                        <Thumbnail size='Xlarge' source={user} />
                        <VerticalStack gap={1}>
                            <TextStyle variant='heading' size='xl' tone='subdued' as='h4' fontWeight='bold' className='inverse-color'>
                                Arvind Kumar
                            </TextStyle>
                            <TextStyle variant='body' size='md' tone='subdued' as='p'>
                                arvindkumar.kumar05@gmail.com
                            </TextStyle>
                            <TextStyle variant='body' size='md' tone='subdued' as='p'>
                                Joined on 12 Dec 2025
                            </TextStyle>
                        </VerticalStack>
                    </InlineStack>
                    <div style={{width: '250px', height: '100px'}}>
                        <Line data={data} options={options} className='chart-line' />
                        <InlineStack gap={2} align={'center'}>
                            <TextStyle variant='body' size='md' tone='subdued' as='p' className='inverse-color'>
                                Progress
                            </TextStyle>
                            <div className="summary-card-trend positive">
                                <span className="trend-arrow">↑</span>
                                <span className="trend-value">+12.5%</span>
                            </div>
                        </InlineStack>
                    </div>
                </InlineStack>
            </Card>

            {/* Tabs Section */}
            <Card className='config-card'>
                <Tabs defaultValue="basic-details" className="config-tabs">
                    <TabsList>
                        <TabsTrigger value="basic-details">Basic Details</TabsTrigger>
                        <TabsTrigger value="change-password">Change Password</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                        <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
                    </TabsList>

                    {/* Basic Details Tab */}
                    <TabsContent value="basic-details">
                        <div className="config-form">
                            <div className="config-form-grid">
                                <div className="config-form-field">
                                    <TextField
                                        label="Full Name"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Date of Birth"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="DD/MM/YYYY"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Mobile Number"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter mobile number"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Email"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter email"
                                        type="email"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Gender"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter gender"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Marital Status"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter marital status"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Father's Name"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter father's name"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Address"
                                        value={""}
                                        onChange={() =>{}}
                                        placeholder="Enter address"
                                    />
                                </div>
                            </div>
                            <div className="config-form-actions">
                                <Button variant="Secondary">Cancel</Button>
                                <Button>Save Changes</Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Change Password Tab */}
                    <TabsContent value="change-password">
                        <div className="config-form">
                            <div className="config-form-single">
                                <div className="config-form-field">
                                    <TextField
                                        label="Current Password"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter current password"
                                        type="password"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="New Password"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Enter new password"
                                        type="password"
                                    />
                                </div>
                                <div className="config-form-field">
                                    <TextField
                                        label="Confirm New Password"
                                        value={""}
                                        onChange={() => {}}
                                        placeholder="Confirm new password"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div className="config-form-actions">
                                <Button variant="Secondary">Cancel</Button>
                                <Button>Update Password</Button>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Reports Tab */}
                    <TabsContent value="reports">
                        <TextStyle variant='heading' size='xl' tone='subdued' as='h4' fontWeight='bold' className='inverse-color'>
                            Reports
                        </TextStyle>
                    </TabsContent>

                    {/* Bank Details Tab */}
                    <TabsContent value="bank-details">
                        <TextStyle variant='heading' size='xl' tone='subdued' as='h4' fontWeight='bold' className='inverse-color'>
                            Bank details
                        </TextStyle>
                    </TabsContent>
                </Tabs>
            </Card>
            </VerticalStack>
        </div>
    )
}

export default Configuration