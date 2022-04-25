import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function DadosEndereco({aoEnviar}) {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')

    return (
        <form onSubmit={evento => {
            evento.preventDefault()
            aoEnviar({cep, endereco, numero, estado, cidade})
        }}>
            <TextField 
                id="cep" 
                label="CEP" 
                type="text"
                variant="standard" 
                margin="normal" 
                required 

                value={cep}

                onChange={(evento) => {
                    setCep(evento.target.value)
                }}
            />
            
            <TextField 
                id="endereco" 
                label="Endereço" 
                type="text"
                variant="standard" 
                margin="normal" 
                fullWidth 
                required

                value={endereco}

                onChange={(evento) => {
                    setEndereco(evento.target.value)
                }}
            />

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="standard"
                margin="normal" 
                // required

                value={numero}

                onChange={(evento) => {
                    setNumero(evento.target.value)
                }}
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="standard"
                margin="normal" 
                // required

                value={estado}

                onChange={(evento) => {
                    setEstado(evento.target.value)
                }}
            />

            <TextField 
                id="cidade" 
                label="Cidade" 
                type="text"
                variant="standard" 
                margin="normal" 
                fullWidth 
                required
                
                value={cidade}
                
                onChange={(evento) => {
                    setCidade(evento.target.value)
                }}
            />

            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                fullWidth>
                Finalizar
            </Button>
        </form>
    );
}

export default DadosEndereco;