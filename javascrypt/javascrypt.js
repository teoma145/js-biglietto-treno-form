const button = document.querySelector('#invia');
const numeroCasuale = Math.floor(Math.random() * 10) + 1;
const numeroCasuale2 = Math.floor(Math.random() * 10000) + 1;
const Resetbtn = document.querySelector('.btn-info');

Resetbtn.addEventListener('click', function(){
    const nome = document.getElementById('nome').value ="";
    let km = document.getElementById('Km').value = "";
    let age = document.getElementById('age').value = ""
    let divnome = document.getElementById('namesur')
    let divcosto = document.getElementById('costo')
    let divoffer = document.getElementById('offer')
    let divcarrozza = document.getElementById('carrozza')
    let divcode = document.getElementById('code')
    divnome.innerHTML = "";
    divcosto.innerHTML = "";
    divoffer.innerHTML = "";
    divcarrozza.innerHTML = "";
    divcode.innerHTML = "";
})

button.addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    let km = document.getElementById('Km').value;
    let age = document.getElementById('age').value;
    let prezzobiglietto = (km * 0.21)
    let divnome = document.getElementById('namesur')
    let divcosto = document.getElementById('costo')
    let divoffer = document.getElementById('offer')
    let divcarrozza = document.getElementById('carrozza')
    let divcode = document.getElementById('code')
    divcode.innerHTML=`numero cp: ${numeroCasuale2}`
    divnome.innerHTML =`<p> Nome passeggero: ${nome}`;
    divcarrozza.innerHTML=`Carrozza: ${numeroCasuale}`
    if(nome == '' || km == '' || age == '')
    { alert('informazioni errate') }
    else if( age == "minorenne"){
        prezzobiglietto = prezzobiglietto - (prezzobiglietto * 20/100);
    prezzobiglietto = prezzobiglietto.toFixed(2);
    divcosto.innerHTML =`il prezzo del tuo biglietto è ${prezzobiglietto}€`
    divoffer.innerHTML = ('Biglietto promo minorenni')
    }
    else if( age == "over"){
        prezzobiglietto = prezzobiglietto - (prezzobiglietto * 40/100);
    prezzobiglietto = prezzobiglietto.toFixed(2);
    divcosto.innerHTML = `il prezzo del tuo biglietto è ${prezzobiglietto}€`
    divoffer.innerHTML = ('Biglietto promo Anziani')
    }
    else{
        divcosto.innerHTML = `il prezzo del tuo biglietto è ${prezzobiglietto}€`
        divoffer.innerHTML = ('Biglietto Standard')
    }
});