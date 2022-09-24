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

  const txJuros4x = valorInserido * 0.0399;
  const vlParcela4x = (valorInserido / 4) + txJuros4x;
  const acrescimo4x = txJuros4x * 4;
  const totalComAcrescimo4x = valorInserido + acrescimo4x;

  const txJuros5x = valorInserido * 0.0499;
  const vlParcela5x = (valorInserido / 5) + txJuros5x;
  const acrescimo5x = txJuros5x * 5;
  const totalComAcrescimo5x = valorInserido + acrescimo5x;

  const txJuros7x = valorInserido * 0.0799;
  const vlParcela7x = (valorInserido / 7) + txJuros7x;
  const acrescimo7x = txJuros7x * 7;
  const totalComAcrescimo7x = valorInserido + acrescimo7x;

  const txJuros8x = valorInserido * 0.0899;
  const vlParcela8x = (valorInserido / 8) + txJuros8x;
  const acrescimo8x = txJuros8x * 8;
  const totalComAcrescimo8x = valorInserido + acrescimo8x;

  tabelaJuros4x.innerHTML = txJuros4x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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
  tabelaJuros5x.innerHTML = txJuros5x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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
  tabelaJuros7x.innerHTML = txJuros7x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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
  tabelaJuros8x.innerHTML = txJuros8x.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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