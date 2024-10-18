const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  

  
const tickconfig = {
  color: getCSS('--primary-color'),
  size: 16,
  family: getCSS('--font')
}

function criarGráficos( data, loyout)
  const grafico = document.createElement('div');
  grafico.className = 'grafico';
  document.getElementById('graficos-container').appendChild(grafico);
  const config = {
  responsive: true,
  displayModeBar: false
  }
  plotly.newPlot(grafico,data, loyout , config);

  function incluirTexto(texto) {
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    container.appendChild(paragrafo)
    paragrafo.innerHTML = texto;
}