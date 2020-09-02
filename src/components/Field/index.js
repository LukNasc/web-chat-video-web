import React from 'react'

import { Container, Label } from './style'

export default function Field({ placeholder, label, onChange }) {
    return (
        <>
            <Label>
                {label}
            </Label>
            <Container placeholder={placeholder} onChange={onChange} />
        </>
    )
}