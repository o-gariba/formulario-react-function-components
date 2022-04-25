import { Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import DadosEndereco from "./DadosEndereco";
import DadosLogin from "./DadosLogin";
import DadosPessoais from "./DadosPessoais";

function FormCadastro({aoEnviar, validacaoCPF, seErro}) {

    const [qualForm, setQualForm] = useState(0)

    const [dadosColetados, setDadosColetados] = useState({})

    useEffect(() => {
        // mandar os dados coletados para aoEnviar e apagar o console log daqui. Fazer um if para enviar os dados apenas no último formulario (comparar numero do forms com o tamanho do array)
        if (qualForm === (formularios.length - 1)) {
            aoEnviar({dadosColetados})
        }
        // console.log(dadosColetados)
    })

    
    const formularios = [
        <DadosLogin aoEnviar={coletaDados} />,
        <DadosPessoais aoEnviar={coletaDados} validacaoCPF={validacaoCPF} seErro={seErro} />,
        <DadosEndereco aoEnviar={coletaDados}/>,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ]

    // função coletar dados, vai usar useState (começando como um objeto vazio), na hora de setar dados uso spread operator dos dados já no usestate e dos dados recebidos. Dpois coleto esses dados de cada formulario, chamo o próximo.
    function coletaDados(dados) {
        setDadosColetados({...dadosColetados, ...dados})
        // console.log(dadosColetados)
        proximo()
    }

    function proximo() {
        setQualForm(qualForm + 1)
    }

    return(
        <Fragment>
            {formularios[qualForm]}
        </Fragment>
    )
}

export default FormCadastro;