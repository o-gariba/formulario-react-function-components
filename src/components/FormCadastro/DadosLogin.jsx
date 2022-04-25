import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function DadosLogin({aoEnviar}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <form onSubmit={evento => {
            evento.preventDefault()
            // console.log({email, senha})
            aoEnviar()
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email"
                variant="standard"
                margin="normal"
                required
                fullWidth
                
                value={email}

                onChange={evento => {
                    setEmail(evento.target.value)
                }}
            />

            <TextField 
                id="senha" 
                label="senha" 
                type="password"
                variant="standard"
                margin="normal"
                fullWidth
                required

                value={senha}

                onChange={evento => {
                    setSenha(evento.target.value)
                }}
            />

            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                log in
            </Button>
        </form>
    )

}

export default DadosLogin; 