import React, { Fragment } from "react";
import DadosEndereco from "./DadosEndereco";
import DadosLogin from "./DadosLogin";
import DadosPessoais from "./DadosPessoais";

function FormCadastro({aoEnviar, validacaoCPF, seErro}) {

    return(
        <Fragment>
            <DadosPessoais aoEnviar={aoEnviar} validacaoCPF={validacaoCPF} seErro={seErro} />
            <DadosLogin/>
            <DadosEndereco/>
        </Fragment>
    )
}

export default FormCadastro;