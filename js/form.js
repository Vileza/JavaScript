  var bottao            = document.querySelector("#adicionar-paciente");

  bottao.addEventListener("click", function(event){
    event.preventDefault();
    var form              = document.querySelector("#formulario");
    var paciente          = dadosPaciente(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
      exibeMensagemErro(erros);
      return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";

});

  function adicionaPacienteNaTabela(paciente){
    var pacienteTr        = mostraTr(paciente);
    var tabela            = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
  }

// Para cada item da variável "erros", executa a função
//Na função criado um elemento "li" do tipo html
//Com ele criado, agora o conteúdo da variável "li" irá receber o erro.
//Por fim a variável "ul", ou tag ul, na linha está passando a tag li para dentro da tag ul. formando assim um espécie de lista

  function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
      var li= document.createElement("li")
      li.textContent = erro;
      ul.appendChild(li);
    });

  }

  function validaPaciente(paciente){
    var erros = [];
    if (paciente.nome.length == 0)
      erros.push("Preencha o campo nome!");

    if(paciente.peso.length == 0 )
      erros.push("Preencha o campo peso!");

    if(paciente.altura.length == 0)
      erros.push("Preencha o campo altura!");

    if(paciente.gordura.length == 0)
      erros.push("Preencha o campo gordura!");

    if(!verifAltura(paciente.altura))
      erros.push("Campo altura incorreta!");

    if (!verifPeso(paciente.peso))
      erros.push("Campo peso incorreto!");

    return erros;
  }

  function dadosPaciente( form ){
    var paciente = {
      nome       : form.nome.value,
      peso       : form.peso.value,
      altura     : form.altura.value,
      gordura    : form.gordura.value,
      imc        : calculaimc(form.altura.value, form.peso.value)
    }
    return paciente;
  }

  function mostraTr( paciente ){

    var pacienteTr        = document.createElement("tr");
    pacienteTr.classList.add(".paciente");

    pacienteTr.appendChild(mostraTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(mostraTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(mostraTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(mostraTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(mostraTd(paciente.imc, "info-imc"));

    return pacienteTr;
  }

  function mostraTd( dado, classe ){
    var td         = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
  }

  //console.log(pacienteTr);
  console.log(paciente);
