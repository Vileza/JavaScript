var adicionarpacientes = document.querySelector("#buscar-pacientes");

adicionarpacientes.addEventListener("click", function(){
  console.log("Buscando informações...");

  var requisicao = new XMLHttpRequest();
  requisicao.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  requisicao.addEventListener("load", function(){
    var resposta = requisicao.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente);
    });

  });
  requisicao.send();

});
