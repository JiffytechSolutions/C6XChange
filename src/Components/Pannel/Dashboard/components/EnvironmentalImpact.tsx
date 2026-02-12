import { Card, InlineStack, TextStyle } from 'jiffy-ui'
import React from 'react'

const EnvironmentalImpact = () => {
  return (
    <Card header={{title: 'Environmental Impact'}}>
        <div className='environmental-impact-content'>
            <div className='environmental-impact-content-item'>
                <InlineStack justifyContent={'between'}>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        CO₂ Offset
                    </TextStyle>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        2,847 tCO2e
                    </TextStyle>
                </InlineStack>
            </div>
            <div className='environmental-impact-content-item'>
                <InlineStack justifyContent={'between'}>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        Trees Planted Equivalent
                    </TextStyle>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        128,115
                    </TextStyle>
                </InlineStack>
            </div>
            <div className='environmental-impact-content-item'>
                <InlineStack justifyContent={'between'}>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        Miles Not Driven
                    </TextStyle>
                    <TextStyle variant='body' size='md' tone='subdued' as='p'>
                        6.2M 
                    </TextStyle>
                </InlineStack>
            </div>
        </div>
    </Card>
  )
}

export default EnvironmentalImpact