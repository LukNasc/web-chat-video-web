import React from 'react';

import { Container } from './style'

export default function Button({ title, onClick }) {
    return (
        <Container onClick={onClick}>
            {title}
        </Container>
    )
}