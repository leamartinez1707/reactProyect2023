import React from 'react'
import { useState } from 'react';

const Formulario = () => {

    const {total, compras} = props;

    const [form, setForm] = useState({

        buyer:{
            email:'',
            nombre:'',
            apellido:'',
            telefono:''
        },
        total,
        items:compras
    })

    const handleChange = () => {

        
    }
    
  return (
    <div>
        <form style={{display: 'flex', flexDirection:'column'}} action="">
            <h1>Checkout</h1>
        <input type="text" name='email' placeholder='email'/>
        <input type="text" name='nombre' placeholder='nombre'/>
        <input type="text" name='apellido' placeholder='apellido'/>
        <input type="text" name='telefono' placeholder='telefono'/>
        <button type='submit'>Comprar</button>
        </form>
    </div>
  )
}

export default Formulario