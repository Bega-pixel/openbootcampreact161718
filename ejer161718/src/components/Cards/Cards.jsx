import React from 'react'
import Botonestado from "../Botones/Botonesestado.js";

const Cards = ({ name, email, remove }) => {

    return (
        
    <div className="card m-5 ">
        <div className="card-header">
        User: { name }
        </div>
        <div className="card-body">
            <h5 className="card-text">Email: { email }</h5>
            
            <Botonestado estado={false} />
            
        <div className="d-flex justify-content-end">
            <button className="btn btn-outline-danger d-flex justify-content-end" onClick={remove}>Delete User</button>
        </div>

        </div>
    </div>

    )
}

export default Cards;