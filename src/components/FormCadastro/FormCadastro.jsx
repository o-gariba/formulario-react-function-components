import React from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material"

// Function components é uma abordagem mais moderna, não necessáriamente melhor. Acho q é mais rápida de ser criada e usada para quando estamos lidando com stateless components (não muda o estado, como um componente que atualiza um bloco de notas)
function FormCadastro() {
    return(
        <form>
            <TextField id="nome" label="Nome Completo" variant="standard" margin="dense" fullWidth required/>

            <TextField id="cpf" label="CPF" variant="standard" margin="dense" fullWidth required/>
            
            <TextField id="email" label="E-mail" variant="standard" margin="dense" fullWidth required/>

            {/* Existe o checkbox no Material UI mas hj está mais em moda usar o INTERRUPTOR (switch) para a mesma finalidade */}

            <FormControlLabel label="Promoções" control={<Switch name="promocoes" color="primary" defaultChecked />}/>

            <FormControlLabel label="Novidades" control={<Switch name="novidades" color="primary" defaultChecked />}/>

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    )
}

export default FormCadastro;