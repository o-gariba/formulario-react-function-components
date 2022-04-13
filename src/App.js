import { Component, Fragment } from 'react';
import './App.css';
import FormCadastro from './components/FormCadastro/FormCadastro';

class App extends Component{
  render() {
    return (
      // Fragment encapsula todas as tags para retornarmos apenas uma tag mãe, e não é renderizado no HTML.
      <Fragment>
        <h1>Formulário de cadastro</h1>
        <FormCadastro/>
      </Fragment>
    );
  }
}

export default App;
