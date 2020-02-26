var bottao              = document.querySelector("#adicionar-paciente");

bottao.addEventListener("click", function(event){
  event.preventDefault();
  var form              = document.querySelector("#formulario");

  var paciente          = dadosPaciente(form);

  console.log(paciente);

  var pacienteTr        = document.createElement("tr");
  var nomeTd            = document.createElement("td");
  var pesoTd            = document.createElement("td");
  var alturaTd          = document.createElement("td");
  var gorduraTd         = document.createElement("td");
  var imcTd             = document.createElement("td");

  nomeTd.textContent    = nome;
  pesoTd.textContent    = peso;
  alturaTd.textContent  = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent     = imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  function dadosPaciente(form){
    var paciente = {
      nome       : form.nome.value,
      peso       : form.peso.value,
      altura     : form.altura.value,
      gordura    : form.gordura.value,
      imc        : calculaimc(form.altura.value,form.peso.value)
    }
    return paciente;
  }

  var tabela            = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);






  console.log(pacienteTr);
  console.log(nome);
  console.log(peso);
  console.log(altura);
  console.log(gordura);


});
