import React from 'react';
import styled from 'styled-components'

const CircleDiv = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color || 'purple'};
    border-radius: 50%;
`;

export default CircleDiv;
