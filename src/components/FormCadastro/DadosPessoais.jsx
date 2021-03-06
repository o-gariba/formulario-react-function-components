import React, { useContext, useState } from "react";
// Usamos hooks para usar estados dentro de um function component. Pensando na função de uma função, não faria sentido ela guardar variáveis e estados, por isso usamos o hook.
import { Button, FormControlLabel, Switch, TextField } from "@mui/material"
import useErros from "../../hooks/useErros";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

// Function components é uma abordagem mais moderna, não necessáriamente melhor. Acho q é mais rápida de ser criada e usada para quando estamos lidando com stateless components (não muda o estado, como um componente que atualiza um bloco de notas). Deve começar com letra maiúscula!

function DadosPessoais({aoEnviar}) {

    // passamos como parametro da função a desconstruão do objeto props, pegando apenas um de seus métodos. Isso agiliza o código e é uma técnica mais avançada de lidar com propriedades.

    // useState é um dos usos possíveis do Hook
    // Uma regra do uso de hook é que ele sempre deve ser usada no nível mais alto da função. Ou seja, fora de fors, whiles, ifs, etc...

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [promo, setPromo] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const validacoes = useContext(ValidacoesCadastro)

    // const [erros, setErros] = useState({cpf: {valido:true, texto:""}})

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    // Precisamos desses 2 elementos para fazer o gerenciamento do componente e chamar o ciclo de renderização quando o estado for alterado
    
    // function validarCampos(evento) {
    //     const {name, value} = evento.target
    //     const novoEstado = {...erros}
    //     novoEstado[name] = validacoes[name](value)
    //     setErros(novoEstado)
    // }

    return(
        <form onSubmit={evento => {
            evento.preventDefault()
            if (possoEnviar()) aoEnviar({nome, cpf, email, promo, novidades})
        }}>

            <TextField 
                id="nome" 
                label="Nome Completo" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                required 

                value={nome} 
                onChange={evento => {
                    setNome(evento.target.value)
                }}
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                required

                name="cpf"

                value={cpf} 

                onChange={evento => {
                    setCpf(evento.target.value)
                }}
                
                onBlur={validarCampos}

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
            />
            
            <TextField 
                id="email" 
                label="E-mail" 
                variant="standard" 
                margin="dense" 
                fullWidth 
                // required

                value={email} 
                onChange={evento => {
                    setEmail(evento.target.value)
                }}
            />

            {/* Existe o checkbox no Material UI mas hj está mais em moda usar o INTERRUPTOR (switch) para a mesma finalidade */}

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" color="primary" checked={promo} />}

                value={promo} 
                onChange={evento => {
                    setPromo(evento.target.checked)
                }}
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" color="primary" checked={novidades} />}

                value={novidades} 
                onChange={evento => {
                    setNovidades(evento.target.checked)
                }}
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

export default DadosPessoais;