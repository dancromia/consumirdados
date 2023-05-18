async function buscarEndereco(cep) {
    var menssagemErro = document.getElementById('erro')
    menssagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCEP.json()
        if (consultaCepConvertida.erro) {
            throw Error("Cep não encontrado")
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')
        cidade.value = consultaCepConvertida.localidade
        logradouro.value = consultaCepConvertida.logradouro
        estado.value = consultaCepConvertida.uf
        bairro.value = consultaCepConvertida.bairro


        console.log(consultaCepConvertida)
    } catch (erro) {
        menssagemErro.innerHTML = `<p>CEP inválido, tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscarEndereco(cep.value))
