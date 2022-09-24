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


function handleChange(e){
    const valorInserido = +e.target.value
    const txJuros4x = valorInserido + 100
    const vlParcela4x = valorInserido + 200
    const acrescimo4x = valorInserido + 300
    const totalComAcrescimo4x = valorInserido + 400 
  
  tabelaJuros4x.innerHTML = txJuros4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaParcela4x.innerHTML = vlParcela4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaAcrescimo4x.innerHTML = acrescimo4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  
  tabelaTotalComAcrescimo4x.innerHTML = totalComAcrescimo4x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const txJuros5x = valorInserido + 100
    const vlParcela5x = valorInserido + 200
    const acrescimo5x = valorInserido + 300
    const totalComAcrescimo5x = valorInserido + 400
    tabelaJuros5x.innerHTML = txJuros5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela5x.innerHTML = vlParcela5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})   
    tabelaAcrescimo5x.innerHTML = acrescimo5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo5x.innerHTML = totalComAcrescimo5x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const txJuros7x = valorInserido + 100 
    const vlParcela7x = valorInserido + 200
    const acrescimo7x = valorInserido + 300
    const totalComAcrescimo7x = valorInserido + 400
    tabelaJuros7x.innerHTML = txJuros7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela7x.innerHTML = vlParcela7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaAcrescimo7x.innerHTML = acrescimo7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo7x.innerHTML = totalComAcrescimo7x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const txJuros8x = valorInserido + 100
    const vlParcela8x = valorInserido + 200
    const acrescimo8x = valorInserido + 300
    const totalComAcrescimo8x = valorInserido + 400
    tabelaJuros8x.innerHTML = txJuros8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaParcela8x.innerHTML = vlParcela8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaAcrescimo8x.innerHTML = acrescimo8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    
    tabelaTotalComAcrescimo8x.innerHTML = totalComAcrescimo8x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    if(valorInserido === 0){
    
      const container = document.querySelectorAll('.resultado')

      container.forEach((item)=>{
        item.classList.add('desativado')
        
      })
    }
    if(valorInserido > 1){
      const container = document.querySelectorAll('.resultado')
      container.forEach((item)=>{
        item.classList.remove('desativado')
        
      })    
  }
} 

valor.addEventListener('keyup', handleChange)
// valor.addEventListener('keyup', handleChange5x)
// valor.addEventListener('keyup', handleChange7x)
// valor.addEventListener('keyup', handleChange8x)