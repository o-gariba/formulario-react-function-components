function validaCPF(cpf) {
  return (cpf.length === 11 && (parseInt(cpf) == cpf) ? {valido: true, texto: ""} : {valido: false, texto: "É necessário ter 11 números, apenas!"})
}

function validaSenha(senha) {
    return (senha.length >=8 && senha.length <= 30 ? {valido: true, texto: ''} : {valido: false, texto: 'Sua senha deve ter entre 8 e 30 caracteres!'})
}

export {validaCPF, validaSenha}