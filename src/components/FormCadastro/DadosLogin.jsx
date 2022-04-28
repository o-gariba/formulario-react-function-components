import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function DadosLogin({aoEnviar, validacoes}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erros, setErros] = useState({senha: {valido: true, texto: ''}})

    function validarCampos(evento) {
        const {name, value} = evento.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) return false
        }
        return true
    }

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