
function gerarTabuada(){
    const inputElem = document.getElementById("numeroInput");
    const valorInput = inputElem.value;
    const numero = Number(valorInput);
    const divResultado = document.getElementById("resultado")

    divResultado.innerHTML = "";
    if(valorInput === ""){
        divResultado.innerHTML = "<span Class=''>Digite um valor valido!</span>"
        return;
    }else if(numero < 1 || numero >10){
        divResultado.innerHTML = "<span Class=''>Digite um valor de 1 a 10!</span>"
        return;
    }
    const lista = document.createElement("ul")
    for(let i = 1; i<=10; i++){
        let resultadoMulti = numero * i;
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${numero} x ${i} = ${resultadoMulti}`;

        if(numero % 2 === 0){
            itemLista.style.color = "blue";
        }else{
            itemLista.style.color = "red";
        }
        lista.appendChild(itemLista)
    }
    divResultado.appendChild(lista)
}
