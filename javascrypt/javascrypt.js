const button = document.querySelector('#invia');

button.addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    let km = document.getElementById('Km').value;
    let age = document.getElementById('age').value;
    let prezzobiglietto = (km * 0.21)
    let divnome = document.getElementById('namesur')
    let divcosto = document.getElementById('costo')
    divnome.innerHTML =`<p> Nome: ${nome}`;
    if(nome == '' || km == '' || age == '')
    { alert('informazioni errate') }
    else if( age == "minorenne"){
        prezzobiglietto = prezzobiglietto - (prezzobiglietto * 20/100);
    prezzobiglietto = prezzobiglietto.toFixed(2);
    divcosto.innerHTML = prezzobiglietto
    }
});