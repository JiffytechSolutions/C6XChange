import { Badge, Card, InlineStack } from 'jiffy-ui'
import React from 'react'

const TokenHolding = () => {
    const tokenHoldingData = [
        {
            label: 'C6-TKN',
            value: 1200,
        },
        {
            label: 'C6-TKN',
            value: 1250,
        },
        {
            label: 'C6-TKN',
            value: 1300,
        },
    ]
  return (
    <Card header={{title: 'Token Holding'}}>
        <InlineStack gap={3}>
            {tokenHoldingData.map((item, index)=> {
                return (
                    <Badge key={index} color='Primary'>{item.label}</Badge>
                )
            })}
        </InlineStack>
    </Card>
  )
}

export default TokenHolding