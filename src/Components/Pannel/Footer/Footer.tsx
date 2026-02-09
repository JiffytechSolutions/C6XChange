import React from 'react';
import {  InlineStack, TextStyle } from 'jiffy-ui';
const Footer = () => {
    return (
        <div>
            <InlineStack align='center' justify='center' gap={2}  fullWidth={true}>
            <TextStyle alignment='center' variant='body' size='md' tone='subdued' as='p'>Copyright © 2026 C6Xchange. All rights reserved.</TextStyle>
           </InlineStack>
        </div>
    );
};

export default Footer;