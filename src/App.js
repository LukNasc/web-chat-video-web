import React, { useMemo, useEffect } from 'react';
import Webcam from 'react-webcam'
import socketio from 'socket.io-client'
import RoundButton from './components/RoundButton'

import { ContentButton, MiniCam } from './style'

function App() {

  const socket = useMemo(() => socketio('https://3000-c2f04b04-7ae2-4a98-8fac-dfdc7cc41f60.ws-us02.gitpod.io/', {
    query: { name: 'Lucas', active: true }
  }), [])

  useEffect(() => {
    socket.on('connection', data => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <Webcam
        width='100%'
        height='30%'
      />
      <MiniCam />
    </div>

  );
}

export default App;
