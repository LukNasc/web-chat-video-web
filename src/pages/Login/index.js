import React, { useState } from 'react'

import { Container } from './style'

import Field from '../../components/Field'
import Button from '../../components/Button'

export default function Login({ history }) {

    const [code, setCode] = useState('')

    const handlerSubmit = () => {
        //faz lógica para login do usuário
        if (code) history.push('/room', { code })
        else alert('Informe o código')
    }

    return (
        <Container>
            <Field
                label="Insira o código indentificador"
                placeholder="XXX-000"
                value={code}
                onChange={({ target: { value } }) => setCode(value)}
            />
            <Button
                title="Entrar"
                onClick={handlerSubmit}
            />
        </Container>
    );
}