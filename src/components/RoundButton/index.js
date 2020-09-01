import React from 'react';
import { Container } from './style'

export default function ({ tooltop, image, color }) {
    return (
        <Container color={color}>
            {image}
        </Container>
    )
}