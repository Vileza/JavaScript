var titulo = document.querySelector("#titulo");

titulo.addEventListener("click", function(event){
  event.preventDefault();
  if (titulo.textContent === "Aparecida Nutrição"){
    titulo.textContent   = "Tebela de pacientes";
  }else{
    titulo.textContent   = "Alteração da tabela";
  }

});

// Na linha abaixo o javascript está dizendo... variável (paciente) vá até o documento(document)
//e acha pra mim o seletor com o id "#primeiro";
  var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i< pacientes.length; i++){
    var paciente = pacientes[i];

    //Aqui agora já com o id selecionado e atribuido para a var pacientes
    // está dizendo ... (tdpeso) vá até a var (paciente) no qual contém o conteudo selecionado anteriormente
    //e faça uma busca no seletor que contém a class (info-peso)
    // depois na proxima linha... var (peso) me tras o conteudo do text (textContent) da var (tdpeso)

    var tdpeso          = paciente.querySelector(".info-peso");
    var peso            = tdpeso.textContent;

    var tdaltura        = paciente.querySelector(".info-altura");
    var altura          = tdaltura.textContent;

    var imcTd           = paciente.querySelector(".info-imc");

    var validaAltura    = true;
    var validaPeso      = true;
    
    if(altura >= 3.00 || altura <= 0){
      validaAltura      = false;
      imcTd.textContent = "Altura Inválida";
      paciente.classList.add("paciente-invalido");
    }

    if(peso <= 0 || peso >= 500){
      validaPeso         = false;
      imcTd.textContent  = "Peso Inválido";
      paciente.classList.add("paciente-invalido");
    }


    if (validaAltura &&  validaPeso){
      var imc            = calculaimc(altura,peso);
      imcTd.textContent  = imc;
    }

    function calculaimc(altura,peso){
      var imc = 0;
      imc = peso / (altura ** 2);
      return imc.toFixed(2);
    }
}
