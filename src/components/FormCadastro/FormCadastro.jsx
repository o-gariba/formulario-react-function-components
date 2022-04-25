import { Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import DadosEndereco from "./DadosEndereco";
import DadosLogin from "./DadosLogin";
import DadosPessoais from "./DadosPessoais";

function FormCadastro({aoEnviar, validacaoCPF, seErro}) {

    const [qualForm, setQualForm] = useState(0)

    const formularios = [
        <DadosLogin aoEnviar={proximo} />,
        <DadosPessoais aoEnviar={proximo} validacaoCPF={validacaoCPF} seErro={seErro} />,
        <DadosEndereco aoEnviar={aoEnviar}/>,
    ]

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