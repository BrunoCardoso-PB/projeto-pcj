const valor = document.querySelector(".valor");

const tabelaJuros4x = document.querySelector(".txjuros4x");
const tabelaParcela4x = document.querySelector(".vlparcela4x");
const tabelaAcrescimo4x = document.querySelector(".acrescimo4x");
const tabelaTotalComAcrescimo4x = document.querySelector(
  ".total-com-acrescimo4x"
);

const tabelaJuros5x = document.querySelector(".txjuros5x");
const tabelaParcela5x = document.querySelector(".vlparcela5x");
const tabelaAcrescimo5x = document.querySelector(".acrescimo5x");
const tabelaTotalComAcrescimo5x = document.querySelector(
  ".total-com-acrescimo5x"
);

const tabelaJuros7x = document.querySelector(".txjuros7x");
const tabelaParcela7x = document.querySelector(".vlparcela7x");
const tabelaAcrescimo7x = document.querySelector(".acrescimo7x");
const tabelaTotalComAcrescimo7x = document.querySelector(
  ".total-com-acrescimo7x"
);

const tabelaJuros8x = document.querySelector(".txjuros8x");
const tabelaParcela8x = document.querySelector(".vlparcela8x");
const tabelaAcrescimo8x = document.querySelector(".acrescimo8x");
const tabelaTotalComAcrescimo8x = document.querySelector(
  ".total-com-acrescimo8x"
);


function handleChange(e) {
  const valorInseridoTeste = e.target.value;
  const valorInserido = parseFloat(valorInseridoTeste.replace(",","."))


  const txJuros4x = 0.12779;
  const acrescimo4x = valorInserido * txJuros4x; 
  const vlParcela4x = (valorInserido + acrescimo4x) / 4;    
  const totalComAcrescimo4x = valorInserido + acrescimo4x;

  const txJuros5x = 0.15455;
  const acrescimo5x = valorInserido * txJuros5x; 
  const vlParcela5x = (valorInserido + acrescimo5x) / 5;    
  const totalComAcrescimo5x = valorInserido + acrescimo5x;

  const txJuros7x = 0.39036;
  const acrescimo7x = valorInserido * txJuros7x; 
  const vlParcela7x = (valorInserido + acrescimo7x) / 7;    
  const totalComAcrescimo7x = valorInserido + acrescimo7x;

  const txJuros8x = 0.44486;
  const acrescimo8x = valorInserido * txJuros8x; 
  const vlParcela8x = (valorInserido + acrescimo8x) / 8;    
  const totalComAcrescimo8x = valorInserido + acrescimo8x;

 
  tabelaParcela4x.innerHTML = vlParcela4x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaAcrescimo4x.innerHTML = acrescimo4x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaTotalComAcrescimo4x.innerHTML = totalComAcrescimo4x.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );  
 

  tabelaParcela5x.innerHTML = vlParcela5x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaAcrescimo5x.innerHTML = acrescimo5x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaTotalComAcrescimo5x.innerHTML = totalComAcrescimo5x.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
 

  tabelaParcela7x.innerHTML = vlParcela7x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaAcrescimo7x.innerHTML = acrescimo7x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaTotalComAcrescimo7x.innerHTML = totalComAcrescimo7x.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ); 
 

  tabelaParcela8x.innerHTML = vlParcela8x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaAcrescimo8x.innerHTML = acrescimo8x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  tabelaTotalComAcrescimo8x.innerHTML = totalComAcrescimo8x.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

  if (valorInserido !== Number) {
    const container = document.querySelectorAll(".resultado");

    container.forEach((item) => {
      item.classList.add("desativado");
    });
  }
  if (valorInserido >= 0) {
    const container = document.querySelectorAll(".resultado");
    container.forEach((item) => {
      item.classList.remove("desativado");
    });
  }
}

valor.addEventListener("keyup", handleChange);