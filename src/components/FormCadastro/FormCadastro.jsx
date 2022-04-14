import React, { useState } from "react";
// Usamos hooks para usar estados dentro de um function component. Pensando na função de uma função, não faria sentido ela guardar variáveis e estados, por isso usamos o hook.
import { Button, FormControlLabel, Switch, TextField } from "@mui/material"

// Function components é uma abordagem mais moderna, não necessáriamente melhor. Acho q é mais rápida de ser criada e usada para quando estamos lidando com stateless components (não muda o estado, como um componente que atualiza um bloco de notas)
function FormCadastro() {
    const [nome, setNome] = useState("")
    // Precisamos desses 2 elementos para fazer o gerenciamento do componente e chamar o ciclo de renderização quando o estado for alterado
    
    return(
        <form onSubmit={evento => {
            evento.preventDefault()
            console.log(nome)
        }}>

            <TextField 
                id="nome" 
                label="Nome Completo" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                required 

                value={nome} 
                onChange={(evento => {
                    setNome(evento.target.value)
                })}
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                required
            />
            
            <TextField 
                id="email" 
                label="E-mail" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                required
            />

            {/* Existe o checkbox no Material UI mas hj está mais em moda usar o INTERRUPTOR (switch) para a mesma finalidade */}

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" color="primary" defaultChecked />}
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" color="primary" defaultChecked />}
            />

            <Button 
                variant="contained" 
                color="primary" 
                type="submit">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormCadastro;