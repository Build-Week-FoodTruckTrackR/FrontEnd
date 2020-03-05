import React from 'react';

import styled from "styled-components";

import { Link } from 'react-router-dom';

const HeaderStyles = styled.div`
    width: 100%;
    background: lightgrey;
    height: 10vh;
    text-align: left;
    margin-bottom: 15vh;
`;

const H2 = styled.h2`
    padding: 2vh 0 0 2vw;
`;


const Header = () => {
    return(
        <HeaderStyles>
            <Link to='/login'>
                <H2>FoodTruckTrakr</H2>
            </Link>
        </HeaderStyles>        
    );
};

export default Header;