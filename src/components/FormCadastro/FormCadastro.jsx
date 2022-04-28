import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import DadosEndereco from "./DadosEndereco";
import DadosLogin from "./DadosLogin";
import DadosPessoais from "./DadosPessoais";

function FormCadastro({aoEnviar, validacoes, seErro}) {

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
        <DadosLogin aoEnviar={coletaDados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletaDados} validacoes={validacoes} seErro={seErro} />,
        <DadosEndereco aoEnviar={coletaDados} validacoes={validacoes}/>,
        <Typography variant="h5" marginTop={5} textAlign={'center'}>Obrigado pelo cadastro!</Typography>
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
            <Stepper activeStep={qualForm}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Conclusão</StepLabel></Step>
            </Stepper>
            {formularios[qualForm]}
        </Fragment>
    )
}

export default FormCadastro;