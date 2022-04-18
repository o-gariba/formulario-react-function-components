import { TextField, Button } from "@mui/material";
import React from "react";

function DadosEndereco() {
    return (
        <form onSubmit={evento => {
            evento.preventDefault()
        }}>
            <TextField 
                id="cep" 
                label="CEP" 
                type="text"
                variant="standard" 
                margin="normal" 
                required 
            />
            
            <TextField 
                id="endereco" 
                label="Endereço" 
                type="text"
                variant="standard" 
                margin="normal" 
                fullWidth 
                required
            />

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="standard"
                margin="normal" 
                // required
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="standard"
                margin="normal" 
                // required
            />

            <TextField 
                id="cidade" 
                label="Cidade" 
                type="text"
                variant="standard" 
                margin="normal" 
                fullWidth 
                required
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