import React, { useMemo, useEffect, useState } from 'react';
import Webcam from 'react-webcam'
import socketio from 'socket.io-client'
import { MiniCam, Container } from './style'

function Room({ history }) {
    const [users, setUsers] = useState([]);

    const code = history.location.state.code

    const socket = useMemo(() => socketio('https://3001-e9407ba5-7bb1-4111-9a1f-ca2971278f0d.ws-us02.gitpod.io', {
        query: { code }
    }), [code])

    useEffect(() => {
        socket.on('new_connected', data => {
            console.log(data)
            let newArr = data.filter(item => item.id !== socket.id)
            setUsers(newArr);
        })
    }, [socket])


    return (
        <Container>
            {
                users.map(item => (
                    <MiniCam key={item}>
                        <Webcam
                            width='400px'
                            height='400px'
                            screenshotFormat="image/jpeg"
                        />
                    </MiniCam>
                ))
            }
        </Container>

    );
}

export default Room;