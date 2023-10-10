const button = document.querySelector('#invia');

button.addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    let km = document.getElementById('Km').value;
    let age = document.getElementById('age').value;
    console.log(nome);
    console.log(km)
    console.log(age)
});