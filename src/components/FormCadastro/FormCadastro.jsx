import React from "react";
import { Button } from "@mui/material"

// Function components é uma abordagem mais moderna, não necessáriamente melhor. Acho q é mais rápida de ser criada e usada para quando estamos lidando com stateless components (não muda o estado, como um componente que atualiza um bloco de notas)
function FormCadastro() {
    return(
        <form>
            <label>Nome Completo</label>
            <input type="text"/>

            <label>CPF</label>
            <input type="text"/>
            
            <label>E-mail</label>
            <input type="email"/>

            <label>promoções</label>
            <input type="checkbox"/>

            <label>promoções</label>
            <input type="checkbox"/>

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    )
}

export default FormCadastro;