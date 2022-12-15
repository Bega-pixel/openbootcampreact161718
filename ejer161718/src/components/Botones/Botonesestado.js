import React, { useState } from 'react'

const Botonestado = () => {

const [conectado, setConectado] = useState(false)

return (
    <div className='d-flex flex-row mb-3'>
        <p className='m-2'>Estado: </p>
        <p className='m-2'> <strong>{ conectado ? 'Online' : 'Offline' }</strong> </p>
        <button className={conectado ? "btn btn-outline-warning" : "btn btn-outline-success" } onClick={() => setConectado(!conectado)}>{ conectado ? 'Disconect' : 'Conect' }</button>
    </div>
)

}

export default Botonestado;