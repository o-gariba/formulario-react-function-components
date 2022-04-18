import { Component } from 'react';
import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';
import { Container, Typography } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

class App extends Component{
  render() {
    return (
      // <Fragment> encapsula todas as tags para retornarmos apenas uma tag mãe, e não é renderizado no HTML.
      // Usando o Material UI, vamos usar o <article> ao invés do Fragment, pois ele já pode ter estilos próprios. article por definição é um elemento auto contido dentro do site, que eu possa mudar ele de página sem perder informações  
      <Container maxWidth="sm" component="article">
        <Typography variant='h4' align='center' component="h1">Formulário de Cadastro</Typography>
        <FormCadastro aoEnviar={aoEnviarForms} validacaoCPF={validaCPF} seErro={emiteErro} />
      </Container>
    );
  }

}
  
function aoEnviarForms(dados) {
  console.log(dados)
}

function validaCPF(cpf) {
  return (cpf.length === 11 && (parseInt(cpf) == cpf) ? {valido: true, texto: ""} : {valido: false, texto: "É necessário ter 11 números, apenas!"})
}

function emiteErro() {
  console.log('ERRO!! Dado(s) inválido(s) inserido(s) no formulário.')
}

export default App;
