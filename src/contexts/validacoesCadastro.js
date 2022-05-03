import React from "react";



const ValidacoesCadastro = React.createContext(
    {senha: semValidacao}
    )
// Posso passar como parametro as regras de validação como eu coloquei antes no FormCadastro, criando uma função anonima dpois do createContext para definir como vai reagir a validação na página onde ela for chamada

function semValidacao(dados) {
    console.log(dados)
    return {valido: true, texto: ''}
}

export default ValidacoesCadastro

/* 

*/