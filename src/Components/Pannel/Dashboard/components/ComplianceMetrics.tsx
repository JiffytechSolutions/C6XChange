import { Alert, Button, Card, ProgressBar, TextStyle, VerticalStack } from 'jiffy-ui'
import React from 'react'

const ComplianceMetrics = () => {
    const complianceMetricsData = [
        {
            label: 'Carbon Offset',
            value: 70,
            type:"Primary"
        },
        {
            label: 'Waste Reduction',
            value: 40,
            type:"Positive"
        },
        {
            label: 'Recycling Rate',
            value: 30,
            type:"Notice"
        },
    ]
  return (
    <Card header={{title: 'Compliance Metrics'}}>
        <VerticalStack gap={5} width='100%' align={'stretch'}>
        <VerticalStack gap={5} width='100%' align={'stretch'}>
            {complianceMetricsData.map((item, index) => (
                <div key={index} className='compliance-metrics-item'>
                    <div className='compliance-metrics-item-progress-bar'>
                        {/* <span className='compliance-metrics-item-progress-bar-value' style={{left: `${item.value}%`}}>{item.value}%</span> */}
                        <ProgressBar variant={item.type as "Primary" | "Positive" | "Notice" | "Negative" | "Neutral"}  size='Large' label={item.label} valuePercentage={item.value} />
                    </div>
                </div>
            ))}
        </VerticalStack>
        <Alert variant='warning' size='Medium' title='Current: 87 | Target: 90' >
            You can insert a description for the message here.The text relates to the action that has been performed.
        </Alert>
        </VerticalStack>
    </Card>
  )
}

export default ComplianceMetrics