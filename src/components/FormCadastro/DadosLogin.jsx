import { TextField, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from '../../hooks/useErros'

function DadosLogin({aoEnviar}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)


    return (
        <form onSubmit={evento => {
            evento.preventDefault()
            if(possoEnviar()) aoEnviar({email, senha})
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
                
                name="senha"

                value={senha}

                onChange={evento => setSenha(evento.target.value)}

                onBlur={validarCampos}

                error={!erros.senha.valido}
                helperText={erros.senha.texto}
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

/* 
    Uso validarCampos no dados de login, copiando e colando a função dos dados pessoais.
    DAR NOME AO CAMPO SENHA
    aplicar a função de validação no onblur
    add campo de error={!erros.senha.valido} e criar um helperText tmb


    fazer validação se posso enviar ou não. Crio uma função possoEnviar, que faz um for nos erros e se algum não for válido eu retorno falso. Se não entrar no if retorno true. Coloco ela no onSubmit de cada form
*/