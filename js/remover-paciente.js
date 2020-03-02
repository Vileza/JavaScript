var pacientes = document.querySelector("table");

//pacientes.forEach(function(paciente){
  pacientes.addEventListener("dblclick", function(event){
    console.log("Fui clicado");
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){

      event.target.parentNode.remove();
    },500);
    //console.log(event.target);
    //event.target significa quem foi o alvo (target) de evento? que no caso o click sobre algo na pagina
    //o parentNode, é o pai do evento que escutou o click
    //No caso, ao clicar duas vezes em alguma linha da tabela, é acionado o evento do click, o event.target mostra o evento
    //e para remover o pai do evento usa "parentNode.remove();", com ele o pai do evento é removido levando junto o filho.
    //o Numero 500, esse valor vem em conjunto a função setTimeout, é definido para que o javascript dê um intervalo de 500 milisegundos, para executar a próxima linha
    // Ou seja, javascript segura essa função (setTimeout) por 500ms, e depois execute ela,  para poder ocorrer a transition do css.
});
