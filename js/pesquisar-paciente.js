var filtro = document.querySelector(".filter");

filtro.addEventListener("input", function(){
  console.log(filtro.value);
  var pacientes = document.querySelectorAll(".paciente");
  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
      console.log("passei");
      var paciente = pacientes[i];
      var nomeTd = paciente.querySelector(".info-nome");
      var nome = nomeTd.textContent;
      var expressao = new RegExp(this.value,"i");
      if(!expressao.test(nome)){
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    }
  }else{
    for(var i = 0; i < pacientes.length; i++ ){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
