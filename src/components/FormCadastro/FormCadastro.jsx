import { Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import DadosEndereco from "./DadosEndereco";
import DadosLogin from "./DadosLogin";
import DadosPessoais from "./DadosPessoais";

function FormCadastro({aoEnviar, validacaoCPF, seErro}) {

    const [qualForm, setQualForm] = useState(0)

    function proximo() {
        setQualForm(qualForm + 1)
    }

    function exibeForm(form) {
        switch(form) {
            case 0: return <DadosLogin aoEnviar={proximo} />
            case 1: return <DadosPessoais aoEnviar={proximo} validacaoCPF={validacaoCPF} seErro={seErro} />
            case 2: return <DadosEndereco aoEnviar={aoEnviar}/>
            default: return <Typography>Erro ao selecionar formulário</Typography>
        }
    }

    return(
        <Fragment>
            {exibeForm(qualForm)}
        </Fragment>
    )
}



export default FormCadastro;