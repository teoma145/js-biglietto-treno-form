const button = document.querySelector('#invia');

button.addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    let km = document.getElementById('Km').value;
    let age = document.getElementById('age').value;
    let prezzobiglietto = (km * 0.21)
    let divnome = document.getElementById('namesur')
    divnome.innerHTML =`<p> Nome: ${nome}`
});