import React from 'react';

import styled from 'styled-components';

const FooterStyles = styled.div`
    width: 100%;
    background: lightgrey;
    height: 10vh;
    text-align: center;
    margin-top: 25vh;
`;

const H3 = styled.h3`
    padding: 2vh 0;
`;

const Footer = () => {
    return(
        <FooterStyles>
            <H3>Copyright © FoodTruckTrakrTeam 2020</H3>
        </FooterStyles>
    );
}

export default Footer;