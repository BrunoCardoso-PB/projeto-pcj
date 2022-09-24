const valor = document.querySelector('.valor')

const tabelaJuros4x = document.querySelector('.txjuros4x')
const tabelaParcela4x = document.querySelector('.vlparcela4x')
const tabelaAcrescimo4x = document.querySelector('.acrescimo4x')
const tabelaTotalComAcrescimo4x = document.querySelector('.total-com-acrescimo4x')

const tabelaJuros5x = document.querySelector('.txjuros5x')
const tabelaParcela5x = document.querySelector('.vlparcela5x')
const tabelaAcrescimo5x = document.querySelector('.acrescimo5x')
const tabelaTotalComAcrescimo5x = document.querySelector('.total-com-acrescimo5x')

const tabelaJuros7x = document.querySelector('.txjuros7x')
const tabelaParcela7x = document.querySelector('.vlparcela7x')
const tabelaAcrescimo7x = document.querySelector('.acrescimo7x')
const tabelaTotalComAcrescimo7x = document.querySelector('.total-com-acrescimo7x')

const tabelaJuros8x = document.querySelector('.txjuros8x')
const tabelaParcela8x = document.querySelector('.vlparcela8x')
const tabelaAcrescimo8x = document.querySelector('.acrescimo8x')
const tabelaTotalComAcrescimo8x = document.querySelector('.total-com-acrescimo8x')


function handleChange4x(e){
    const valorInserido = +e.target.value
    const txJuros4x = valorInserido + 100
    const vlParcela4x = valorInserido + 200
    const acrescimo4x = valorInserido + 300
    const totalComAcrescimo = valorInserido + 400 
  
  tabelaJuros4x.innerHTML = txJuros4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaParcela4x.innerHTML = vlParcela4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaAcrescimo4x.innerHTML = acrescimo4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaTotalComAcrescimo4x.innerHTML = totalComAcrescimo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  if(valorInserido === 0){
    tabelaJuros4x.innerHTML = ""
    tabelaParcela4x.innerHTML = ""
    tabelaAcrescimo4x.innerHTML = ""
    tabelaTotalComAcrescimo4x.innerHTML = ""
  }
}

function handleChange5x(e){
    const valorInserido = +e.target.value
    const txJuros5x = valorInserido + 100
    const vlParcela5x = valorInserido + 200
    const acrescimo5x = valorInserido + 300
    const totalComAcrescimo = valorInserido + 400
    tabelaJuros5x.innerHTML = txJuros5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela5x.innerHTML = vlParcela5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})   
    tabelaAcrescimo5x.innerHTML = acrescimo5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo5x.innerHTML = totalComAcrescimo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    if(valorInserido === 0){
      tabelaJuros5x.innerHTML = ""
      tabelaParcela5x.innerHTML = ""
      tabelaAcrescimo5x.innerHTML = ""
      tabelaTotalComAcrescimo5x.innerHTML = ""
    }
  }

  function handleChange7x(e){
    const valorInserido = +e.target.value
    const txJuros7x = valorInserido + 100 
    const vlParcela7x = valorInserido + 200
    const acrescimo7x = valorInserido + 300
    const totalComAcrescimo = valorInserido + 400
    tabelaJuros7x.innerHTML = txJuros7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela7x.innerHTML = vlParcela7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaAcrescimo7x.innerHTML = acrescimo7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo7x.innerHTML = totalComAcrescimo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    if(valorInserido === 0){
      tabelaJuros7x.innerHTML = ""
      tabelaParcela7x.innerHTML = ""
      tabelaAcrescimo7x.innerHTML = ""
      tabelaTotalComAcrescimo7x.innerHTML = ""
    }
  }

  function handleChange8x(e){
    const valorInserido = +e.target.value
    const txJuros8x = valorInserido + 100
    const vlParcela8x = valorInserido + 200
    const acrescimo8x = valorInserido + 300
    const totalComAcrescimo = valorInserido + 400
    tabelaJuros8x.innerHTML = txJuros8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela8x.innerHTML = vlParcela8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaAcrescimo8x.innerHTML = acrescimo8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo8x.innerHTML = totalComAcrescimo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    if(valorInserido === 0){
      const container8 = document.querySelector('#parcela-8x')
      container8.classList.add("desativado")
    }
    if(valorInserido > 1){
      const container8 = document.querySelector('#parcela-8x')
      container8.classList.remove("desativado")
    }
  }


 

valor.addEventListener('keyup', handleChange4x)
valor.addEventListener('keyup', handleChange5x)
valor.addEventListener('keyup', handleChange7x)
valor.addEventListener('keyup', handleChange8x)